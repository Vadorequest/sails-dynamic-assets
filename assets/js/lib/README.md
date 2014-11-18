# Lib folder

This folder contains files that will be loaded using **requireJs** library, through one of the `assets/js/loaders/loader-X.js` file.
Files contained inside the `assets/linker/js` folder will be loaded using the native sails.js way, and **automatically compressed** in prod mode, while these file won't be compressed.