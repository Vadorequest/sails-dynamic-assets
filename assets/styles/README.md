# Styles importer provided by Sails framework

We do not use the sails method here. Mostly because it requires to list every single file one by one and we prefer to have something more dynamic that automatically *compile/add* new `less/css` files to the view.
Our way is to use a **WebStorm** watcher that compiles `less` files to `css` files each time they are changed. Then the Sails `grunt` tasks *merge and minify* (in `production`) and copy them to the `public` directory.

*The sails way would require a `importer.less` file in the `assets/styles` folder that would contain the following code:*

```js

    /**
     * importer.less
     *
     * By default, new Sails projects are configured to compile this file
     * from LESS to CSS.  Unlike CSS files, LESS files are not compiled and
     * included automatically unless they are imported below.
     *
     * The LESS files imported below are compiled and included in the order
     * they are listed.  Mixins, variables, etc. should be imported first
     * so that they can be accessed by subsequent LESS stylesheets.
     *
     * (Just like the rest of the asset pipeline bundled in Sails, you can
     * always omit, customize, or replace this behavior with SASS, SCSS,
     * or any other Grunt tasks you like.)
     */



    // For example:
    //
    // @import 'variables/colors.less';
    // @import 'mixins/foo.less';
    // @import 'mixins/bar.less';
    // @import 'mixins/baz.less';
    //
    // @import 'styleguide.less';
    // @import 'pages/login.less';
    // @import 'pages/signup.less';
    //
    // etc.

```

And in the file `tasks/config/less.js`, instead of our custom code that compile every less file one by one:

```js

    dev: {
        files: [{
            expand: true,
            cwd: 'assets/styles/',
            src: ['importer.less'],
            dest: '.tmp/public/styles/',
            ext: '.css'
        }]
    }

```
