# Auto injected files

## How does it work?
All files in this folder are automatically injected in every single page of the application.

This is due to Sails framework itself. What it does is that there is a watcher which modify the file called `_dynamicScriptsHead.ejs` which contains the following tag: `<!--SCRIPTS HEAD-->`.
This tag is special and you can find it in the file `/tasks/config/sails-linker.js`. Every time a file is added inside this folder, the content inside the `<!--SCRIPTS HEAD-->` tag is regenerated dynamically.
In production, all these file are automatically merged into one file only. But it keeps the same names in development mode.

So, even if it looks like magic, it is not.

## Global variables and mixins
In this folder, at the root you can see some specific files. These files (colors, mixins, variables) are globals during the LESS compilation. They are all loaded by the `loader` file itself.
They contain variables and mixins *(colors is just a file containing variable about colors, as simple as that)* which are shared with all files in every single sub-folder.
Note that they also override other variables defined by the libraries we use, like Bootstrap so we can customize the application as we want to fit our needs.

## Loader
The loader basically loads libraries *variables* and *mixins* files then load our own *variables* and *mixins* files. That's it!
What we do is that we require this loader from any single LESS file in every single sub-folder, so we can use any mixin and variable from anywhere!