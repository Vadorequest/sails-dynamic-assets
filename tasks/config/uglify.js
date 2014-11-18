/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

    /**
     * Uglify is executed only in production environment.
     */
    grunt.config.set('uglify', {
        // Uglify the single productionBefore.js script, contains a lot of files that are required at the start.
        productionBefore: {
            src: [
                '.tmp/public/concat/productionBefore.js'
            ],
            dest: '.tmp/public/min/productionBefore.js'
        },
        // Uglify the single production.js script, contains a lot of files that are not required at the start and can be loaded at the end to improve the page loading.
        production: {
            src: [
                '.tmp/public/concat/production.js'
            ],
            dest: '.tmp/public/min/production.min.js'
        },
        // We have a lot of files still in the js/ folder, they are loaded through requireJs most of the time.
        js: {
            expand: true,
            cwd: '.tmp/public/js',
            src: ['**/*.js'],
            dest: '.tmp/public/js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
