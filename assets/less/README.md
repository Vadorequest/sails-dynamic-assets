# Less

This folder contains library with Less files that we cannot put into the `styles` or `linker/styles` folders 
because the compilation will fail since the compiler will try to compiler each file separately.

They are loaded server-side by the `assets/linker/styles/loader.less` file in order to share variables and mixins.
They are loaded client-side from the `assets/linker/lib` folder which includes and compiles (WebStorm less watcher) the less libraries. They are automatically loaded by the browser then.


## Update a less library but not effect on the browser?

Yeah, it will happen, you need to do two things:

1. Of course copy the new version of the .less files in the lib you're updating.
2. Go to the `assets/linker/lib/` and open the lib loader, make a change (new line, space) and save to recompile it.

*We could also make a proper **copy** grunt task for that, but it would require much more resources when starting the server because the compilation of these libraries is quite **slow**.*

**Also think about keeping changes made in the `variables.less`, for instance in *font-awesome* we set a custom path for the browser to load the files.**