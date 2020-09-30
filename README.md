# A3_HW1_DevineG

A3 Homework 1 is an introduction into the applications of modular css.

## Application

Utilizing sass can let you can remove monoscipt css pages and apply scss modular plug-ins to replace them. Then, sass complies your scss modules into a master css file which can be compressed for faster web browser loading. 

## Usage

Create a proper folder structure for sass to read:

--sass

-modules

master.scss

Then when you're ready to start building your modules, send them to the module directory with a naming convention of _"name".scss

This lets sass know these modules are needed for compression.

## Compiling

Once you've gotten your sass modules written they need to be imported into the master.scss:

@import 'modules/_'name'.scss'


Now your modules are linked to a single file going into your terminal window write the command:

sass --watch sass:css --style compressed


This tells sass to watch any changes that happen within your modules, compress them into one css file, and write them as a master css file with your css folder.

From here sass will continue to watch your modules that you linked inside the master and apply the changes to the compressed master css file. 

## Conclusion

Now you can breathe a sigh of relief knowing the sight of a dreaded monoscipt page of css is taken care of.



