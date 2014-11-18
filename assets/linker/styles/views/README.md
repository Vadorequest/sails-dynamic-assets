# Views

The files that are inside this folder are only applied to a group of specific views that belong to the same controller. The name of the controller is used as the name of the LESS file.

So, let's say we have the following LESS files:

- *home.less*: Applied to all views inside the `/views/home/` folder.
- *user.less*: Applied to all views inside the `/views/user/` folder.
- And so on.

Of course, this is not magical. The folder doesn't do anything specific actually, what' special here are the rules used inside these files.
If you want to apply the styles only to the *home* views, you need to precise it like this:

    body.home {
        // Code applied only on the home views.
    }

