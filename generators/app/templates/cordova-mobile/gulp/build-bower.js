'use strict';

var gulp = require('gulp');

exports.task = function () {
	
	return gulp.src('bower_components/**/*')
		.pipe(gulp.dest('www/bower_components'));

};
