module.exports = function (grunt) {
    /**
     * Executed by default, so in development mode.
     */
    grunt.registerTask('default', [
        // Registered tasks.
        'compileAssets',
        'linkAssets',

        // Cleanup the folder so that only what's useful is kept.
        'clean:devAfter',

        'watch'
    ]);
};
