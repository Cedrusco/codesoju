'use strict';

var gulp = require('gulp'),
	config = require('../gulpfile.config'),
	$ = require('gulp-load-plugins')({ lazy: true });

exports.task = function () {

	gulp.src([config.paths.assets]).pipe(gulp.dest(config.paths.dist));
	// Mobile
	gulp.src([config.paths.assets]).pipe(gulp.dest('www'));

	return gulp.src('client/app/main.scss')
		.pipe($.plumber())
		.pipe($.concat('main.scss'))
		.pipe($.sass())
		.pipe($.rename('style.css'))
		.pipe(gulp.dest(config.paths.dist))
		.pipe(gulp.dest('www/styles'))
		.pipe($.livereload());

};
