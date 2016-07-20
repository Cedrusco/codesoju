module.exports = function(grunt) {

	// Plugin to load all grunt tasks rather than having to load each one individually
	require('load-grunt-tasks')(grunt);

	/*******************************
	  Grunt Configuration
	  ********************************/
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Reusable paths to be used in template strings
		paths: {
			src: {
				javascripts: ['client/app/**/*.js'],
				html: ['client/app/**/*.html'],
				scss: ['client/scss/main.scss']
			},
			dest: {
				scripts: 'client/dist/scripts.js',
				templates: 'client/dist/templates.js',
				styles: 'client/dist/style.css'
			}
		},

		/**
		 * Concatenation Task
		 * `app.js` must be listed first in order for the angular module
		 * declaration to always be first in the concatenated file
		 * Using a glob pattern afterwards won't load `app.js` for a second time
		 */
		concat: {
			dist: {
				src: ['client/app/app.js', '<%= paths.src.javascripts %>'],
				dest: '<%= paths.dest.scripts %>'
			}
		},

		// Minification Task
		uglify: {
			options: {
				compress: true,
				mangle: true
			},
			my_target: {
				files: {
					// key = destination path, value = source path
					'<%= paths.dest.scripts %>': '<%= paths.dest.scripts %>',
					'<%= paths.dest.templates %>': '<%= paths.dest.templates %>'
				}
			}
		},

		// Sass to CSS Compilation Task
		sass: {
			dist: {
				files: {
					// key = destination path, value = source path
					'<%= paths.dest.styles %>': '<%= paths.src.scss %>'
				}
			}
		},

		// Angular Template Cache Task
		ngtemplates: {
			app: {
				cwd: 'client/app',
				src: '**/*.html',
				dest: '<%= paths.dest.templates %>',
				options: {
					module: 'Soju',
					htmlmin: {
						collapseWhitespace: true,
						collapseBooleanAttributes: true,
						removeComments: true
					}
				}
			}
		},

		/**
		 * Watch Task
		 * Watches all javascript and html files for changes
		 * Runs `buildJS` task if changes are made
		 * Please use a LiveReload browser extension
		 * http://livereload.com/extensions/
		 */
		watch: {
			files: ['<%= paths.src.javascripts %>', '<%= paths.src.html %>'],
			tasks: ['buildJS'],
			options: {
				livereload: true
			}
		}
	});

	/*******************************
	  Grunt Tasks
	  ********************************/

	grunt.registerTask('buildJS', ['ngtemplates', 'concat', 'uglify']);

	grunt.registerTask('buildApp', ['sass', 'buildJS']);

	grunt.registerTask('default', ['buildApp', 'watch']);
};
