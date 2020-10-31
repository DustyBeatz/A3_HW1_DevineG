# Class files

A3 Homework 1 is an introduction into the applications of modular css.

A3 Homework 2 is an introduction to AJAX fetch request utilizing HTTPXML

## Application for Sass

Utilizing sass can let you can remove monoscipt css pages and apply scss modular plug-ins to replace them. Then, sass complies your scss modules into a master css file which can be compressed for faster web browser loading. 

## Sass Usage

Create a proper folder structure for sass to read:

--sass
-modules

master.scss

Then when you're ready to start building your modules, send them to the module directory with a naming convention of _"name".scss

This lets sass know these modules are needed for compression.

## Compiling your Sass

Once you've gotten your sass modules written they need to be imported into the master.scss:

@import 'modules/_'name'.scss'


Now your modules are linked to a single file. Go into your terminal window write the command:

sass --watch sass:css --style compressed


This tells sass to watch any changes that happen within your modules, compress them into one css file, and write them as a master css file within your css folder.

From here sass will continue to watch the modules linked inside the master.scss and apply the changes to master.css in a compressed format. 

## Conclusion for Sass

Now you can breathe a sigh of relief knowing the sight of a dreaded monoscipt page of css is taken care of.

# AJAX Requests

In this section we will go over the uses, application and functionality of an AJAX request.

## AJAX Application

AJAX is used for everything on the internet. It's strong suit is making data call and producing that data on the page without the need to refresh the page. A youtube comment, google maps loading, and runescape are all great examples of how XML and ajax works together to produce the content you see on the page. 

## AJAX Usage

When using AJAX you need to make a fetch call from a database via URL. This URL can be local or web based. 





