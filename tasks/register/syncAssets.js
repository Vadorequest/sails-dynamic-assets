module.exports = function (grunt) {
	/**
	 * Used by the watcher. So only in development mode.
	 */
	grunt.registerTask('syncAssets', [
		'jst:dev',
		'less:dev',
		'sync:dev',
		'coffee:dev'
	]);
};
