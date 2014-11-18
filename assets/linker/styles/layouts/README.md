# Layouts

A layout file is used by a layout. The default layout is called `default.less`, it is used everywhere where a layout is not specifically set.

Basically, the *default layout* is used everywhere, excepted in the backoffice part of the application, for which the `backoffice.less` file should contain the layout rules.

A special file called `shared.less` contains all CSS that is shared between layouts, because sometimes we want to reuse the exact same rules between layouts.

Of course, this is not magical. The folder doesn't do anything specific actually, what' special here are the rules used inside these files.
If you want to apply the styles only to the *default* layout, you need to precise it like this:

    body.layout_default {
        // Code applied only on the default layout.
    }

