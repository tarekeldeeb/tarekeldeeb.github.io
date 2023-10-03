---
layout: post
author: Tarek Eldeeb
title: Compressing SVG Images by Finding Symmetry
comments: true
---

I have tried a couple of free and nice [SVG](https://en.wikipedia.org/wiki/SVG) online compressors; [vecta](https://vecta.io/nano), [compress-or-die](https://compress-or-die.com/svg), and [iLoveImg](https://www.iloveimg.com/compress-image/compress-svg). All make a good job. I was highly interested in achieving the max for a specific image: [Quran Surah Border SVG](https://en.wikipedia.org/wiki/File:Sura_border.svg)

![Sura Boarder](https://upload.wikimedia.org/wikipedia/en/d/d5/Sura_border.svg)

As listed, the file size is 17KB. I tried to go further with compression with no luck. It seems a pre-compressed file.
Then I took a different approach; crop the image to a quarter, then flip its duplicates to rebuild the complete frame again!
## Cropping an SVG
Although SVG supports raster graphics, it's mainly for vector graphics. If you open an SVG with any text editor you will find an XML document with `<path>` element describing an image using a long set of nodes ([Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) points). 
```xml
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -500 16320 2000'>
  <path fill='#005aff' d='M16315 -516h-16286v2007h16286v-2007zM15906 1198v51h-174q-28 -73 .....
</svg>
```
To crop an SVG you need to 
 - reduce the `viewBox` size 
 - and remove all nodes outside that box (non-viewable). 

I tried to use  [Inkscape](https://inkscape.org/) to do this cropping but failed! There's no such option. I tried to `cut` and `clip` but this only sets the cut area to invisible, and the nodes are still there, keeping the file size large. There's a logic behind this behavior though, if the off-viewBox nodes are deleted, the path curves (inside the viewBox) will be changed/corrupted.

![nodes](img/inkscape-clip-nodes.jpg)

 This has to be done manually, for each path/curve crossing the viewBox border, add an extra node exactly at the border. Then it's safe to delete the off-viewBox nodes afterwards. 
 
![nodes](img/inkscape-border-nodes.png)

## Duplicate and Flip
There's a nice [keyword in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use) `use` that lets you use an existing path to create a duplicate. Moreover, there's the possibility to have nested `<svg>` components. Leveraging both features, enabled be to create three duplicates to rebuild the original image with about 1/4 the nodes count.

Another great point to remember is that SVG is an 
> .. open Web standard for describing images that can be rendered cleanly at any size and are designed specifically to work well with other web standards including CSS ..

CSS includes many `transform` functions including `rotate()` and `scale()`. Those are to be used to place the duplicates in their correct places, pixel-level accurate!
```xml
<svg viewBox="0 0 1020 126" width="1020" height="126" xmlns="http://www.w3.org/2000/svg">
 <svg id="topleft" viewBox="0 -5000 5101 631" width="510" height="63">
  <path d="M5100-5000H0v634C3791-1835 16814-5000 5100-5000Zm-2610 631a390 .. />
 </svg>
 <use href="#topleft" fill="red" style="transform:matrix(1, 0, 0, 1, 1020, 126) rotate(180deg)"/>
 <use href="#topleft" fill="green" style="transform:matrix(1, 0, 0, 1, 0, 126) scaleY(-1)"/>
 <use href="#topleft" fill="blue" style="transform:matrix(1, 0, 0, 1, 1020, 0) scaleX(-1)"/>
</svg>
```
The result was 5.5KB and perfectly reconstructs the beautiful Sura border:

![SVG with duplicates](img/sura_border_sym4.svg)

What do you think?