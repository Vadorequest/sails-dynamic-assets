/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {

    grunt.config.set('clean', {
        /**
         * Cleaning done before the grunt starts to run all other tasks.
         */
        dev: [
            '.tmp/public/**'
        ],
        build: [
            'www'
        ],

        /**
         * Cleaning done once the grunt starts has run all other tasks so we only keep what's important, especially in production to having being spied on.
         */
        devAfter: [
            '.tmp/public/js/production/**',// Delete production scripts in development mode.
            '.tmp/public/**/*.d.ts'// Delete .d.ts wherever they are, we don't want them, it's just that because we need .ts file we copy them too and we don't have a choice.
        ],
        prodAfter: [
            // Delete these scripts in production mode, only the scripts located in the production folder are used and they are merged.
            '.tmp/public/js/development/**',
            '.tmp/public/js/production/**',

            '.tmp/public/linker/**',// Delete all files in the linker folder, they have been merged and moved to the "concat" folder.
            '.tmp/public/concat/**',// Delete all files in the concat folder, they have been uglified and are now stored in the "min" folder.
            '.tmp/public/js/**/*.ts',// Delete TypeScript files, used to debug in dev mode but would be a security issue to show them on production.
            '.tmp/public/js/**/*.js.map',// Delete map files, used to debug in dev mode but would be a security issue to show them on production.
            '.tmp/public/**/*.d.ts'// Delete .d.ts wherever they are, we don't want them, it's just that because we need .ts file we copy them too and we don't have a choice.
        ]
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
};
