---
layout: post
author: Tarek Eldeeb
title: Add Filename to Video Frames (Thumbnail in mind)
comments: true
---

When I share a series of video files on whatsapp or telegram, the filenames are ommitted. Only thumbnails can be used to identify the video chapter/part/episode. To solve this issue, I've written a script to run in a folder containing my video files.

The script simply:

- Extract the first frame of each video as an image
- Add a label to that image with FILENAME
- Create a 1-second video from that image with label
- Concatenate that 1-second to the original video


{%- include gist.html id='tarekeldeeb/11ba6656564ef2d62c664b91b5d98d0a' -%}
