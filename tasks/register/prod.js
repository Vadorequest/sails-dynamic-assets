module.exports = function (grunt) {
    /**
     * Executed in production mode.
     */
    grunt.registerTask('prod', [
        // Registered task.
        'compileAssetsProd',

        // Concat files then uglify JS files and finally do the same for CSS files.
        'concat',
        'uglify',
        'cssmin',

        // Registered task.
        'linkAssetsProd',

        // Cleanup the folder so that only what's useful is kept.
        'clean:prodAfter'
    ]);
};
