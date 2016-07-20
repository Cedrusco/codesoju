/*******************************
  All used modules
  ********************************/

var gulp = require('gulp');
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	htmlmin = require('gulp-htmlmin'),
	//NOTE: works only in a combination with a Chrome extension for reload
	livereload = require('gulp-livereload'),
	templateCache = require('gulp-angular-templatecache'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename');

/*******************************
  Variables
  ********************************/

var paths = {
	javascripts: [
		'client/app/**/*.js'
	],
	templates: [
		'client/app/**/*.html'
	],
	scss: [
		'client/scss/**/*.scss'
	]
};

/*******************************
  Gulp tasks
  ********************************/

gulp.task('templateCache', function() {
	return gulp.src(paths.templates)
	.pipe(htmlmin({
		collapseWhitespace: true,
		collapseBooleanAttributes: true,
		removeComments: true
	}))
    .pipe(templateCache('templates.js', { module: 'Soju'}))
    .pipe(gulp.dest('client/dist/'));
});

gulp.task('buildJS', ['templateCache'], function() {
	return gulp.src(paths.javascripts)
    .pipe(concat('scripts.js'))
    .pipe(uglify())
	.pipe(gulp.dest('client/dist/'))
	.pipe(livereload());
});

gulp.task('buildCSS', function () {
    return gulp.src('client/scss/main.scss')
	.pipe(plumber())
	.pipe(sass())
	.pipe(rename('style.css'))
	.pipe(gulp.dest('client/dist/'))
	.pipe(livereload());
});

gulp.src(['client/app/assets/**/*']).pipe(gulp.dest('client/dist'));

gulp.task('buildApp', ['buildCSS', 'buildJS']);

/*******************************
  Gulp watches
  ********************************/

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch([paths.templates, paths.javascripts], ['buildJS']);
  gulp.watch([paths.scss], ['buildCSS']);
});

/*******************************
  Gulp default task definition
  ********************************/

gulp.task('default', ['buildApp', 'watch']);
