/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

    grunt.config.set('copy', {
        dev: {
            files: [
                // Copy all assets excepted some extension that are used server side only (less, coffee, ...).
                // TS files are used to debug and removed using a "clean" strategy in production mode.
                {
                    expand: true,
                    cwd: './assets',
                    src: ['**/*.!(coffee|less|md|ejs)'],
                    dest: '.tmp/public'
                },
                // Copy the private locales files into the public/language directory accessible from client side.
                {
                    expand: true,
                    cwd: './config/locales',
                    src: ['**/*.json'],
                    dest: '.tmp/public/languages'
                }
            ]
        },
        build: {
            files: [{
                expand: true,
                cwd: '.tmp/public',
                src: ['**/*'],
                dest: 'www'
            }]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
