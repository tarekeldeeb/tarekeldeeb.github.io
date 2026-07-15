---
layout: post
author: Tarek Eldeeb
title: "Complete Guide: Odoo ETA IoT Proxy on macOS"
comments: true
---

This document outlines the steps to resolve the architecture conflict between Apple Silicon (ARM64) and the Egyptian Tax Authority's Intel (x86\_64) middleware.

## **1\. Environment Setup (Intel/Rosetta Mode)**

You must force Python into Intel mode to load the `libcastle.1.0.0.dylib` library.

1. Download the **macOS 64-bit universal2 installer** from [python.org](https://www.python.org/downloads/macos/).  
2. Download Odoo community edition sources (I tried [version 18](https://www.odoo.com/ar/page/download)). Unzip and `cd` into that directory.
3. Create and activate an Intel-based virtual environment:  
   ```zsh
   arch -x86_64 /usr/local/bin/python3 -m venv venv_intel  
   source venv_intel/bin/activate 
   ```
   
4. Install dependencies: 
   ```zsh
   pip install PyKCS11 netifaces websocket-client pyusb pyserial  
   pip uninstall psycopg2 psycopg2-binary -y  
   pip install psycopg2-binary  
   pip install -e .
   ```

### **1.1 Standalone Hardware Verification Test**

Before patching the Odoo source code, run this standalone script to verify that your Intel environment, the PyKCS11 library, and your local middleware can successfully detect and communicate with your USB hardware token.  
Ensure your USB token is plugged into your Mac, keep your `venv_intel` active, and run:

```zsh  
python3 -c "  
import PyKCS11  
try:  
    lib \= PyKCS11.PyKCS11Lib()  
    lib.load('/usr/local/lib/libcastle.1.0.0.dylib')  
    slots \= lib.getSlotList(tokenPresent=True)  
    print('\\n--- SUCCESS\! \---')  
    print('USB Slots found:', slots)  
except Exception as e:  
    print('\\n--- FAILED \---')  
    print('Error:', e)  
"
```

* **If this prints \--- SUCCESS\! \--- and lists your USB slots:** Your hardware and architecture translation are working flawlessly. Proceed to the patches.  
* **If it fails:** Double-check that your venv_intel was created using the arch -x86_64 flag, and that the file `/usr/local/lib/libcastle.1.0.0.dylib` exists and has correct read permissions.

## **2\. Patching Odoo Source Code**

These two patches are required to bridge the gap between Odoo's Linux-based logic and your macOS environment.

### **Patch A: odoo/addons/hw_drivers/tools/helpers.py**

This helps Odoo to locate your configuration file, read MAC address, and other system specific helper functions. [Patched file to copy over](https://github.com/tarekeldeeb/tarekeldeeb.github.io/raw/master/assets/helper.py)

### **Patch B: odoo/addons/hw\_drivers/iot\_handlers/drivers/L10nEGDrivers.py**

This forces the driver to load your Mac middleware instead of searching for Linux libraries. Find the get\_crypto\_lib method and update it:  
```python
def get_crypto_lib(self):  
    error = lib = False  
    system = platform.system()  
    if system == 'Linux':  
        lib = '/usr/lib/x86_64-linux-gnu/opensc-pkcs11.so'  
    elif system == 'Windows':  
        lib = 'C:/Windows/System32/eps2003csp11.dll'  
    elif system == 'Darwin':  
        # Hardcoded to your specific Intel-compatible middleware path  
        lib = '/usr/local/lib/libcastle.1.0.0.dylib'  
    else:  
        error = self._get_error_template('unsupported_system')  
    return lib, error
```

## **3\. Configuration & Token Pairing**

Odoo requires a secure token to pair your Mac with the Cloud ERP. You will use Odoo's built-in command to generate this token and securely hash it in your configuration file.

1. **Generate the Token:** Ensure your venv_intel is active, then run:  
   ```odoo genproxytoken -c ~/odoo-18.0.post20260713/odoo.conf```
   *Note: This command generates a 16-character hexadecimal token, prints the plaintext token to your terminal, and automatically saves the secure hash of it into your `odoo.conf` file.*  
2. **Copy the Plaintext Token:** Copy the 16-character string from the terminal output.  
3. **Link Your Cloud Server:** Open your odoo.conf:  
   ```nano ~/odoo-18.0.post20260713/odoo.conf```
   Verify the `proxy_access_token` hash was created, and add the `remote_server` parameter to point to your cloud database:
```ini     
   [options]  
   proxy_access_token = [Auto-generated hash will be here]  
   remote_server = https://your-database-name.odoo.com  
```
4. **Pair with Cloud ERP:**  
* Log in to your Cloud ERP.  
* Go to **Accounting \> Configuration \> ETA \> Thumbdrive**.  
* Paste the 16-character plaintext token you copied in Step 2 into the **Access Token** field.  
* Click **Save**.

## **4\. Booting the Proxy**

Always boot using the absolute path to your configuration file to bypass Odoo’s automatic lookup, which often fails on macOS.  
\# Ensure `venv_intel` is active  
```zsh
odoo -c ~/odoo-18.0.post20260713/odoo.conf --load=web,hw_drivers,hw_posbox_homepage -d local_iot_db
```

## **5\. Verification**

1. **Logs:** Look for HTTP service (werkzeug) running on .... Ignore warnings about missing dbus or schedule modules; these are Linux-only and do not affect the certificate fetch.  
2. **Success:** Go to **Accounting \> Configuration \> ETA \> Thumbdrive** in the Cloud ERP and click **"Get Certificate"**.  
3. **Confirmation:** The terminal should show:  
   ```POST /hw_l10n_eg_eta/certificate HTTP/1.1  200
   ```
   The button will disappear from your Cloud ERP, and the certificate data will be successfully loaded into your database.

