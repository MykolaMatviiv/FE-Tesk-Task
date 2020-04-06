/*
* run "npm install" to install all dependencies from package.json or run those manually:
npm install gulp gulp-sass gulp-concat gulp-uglify-es gulp-sourcemaps gulp-autoprefixer gulp-notify -S
*
*/

'use strict';

var gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify-es').default,
sourcemaps = require('gulp-sourcemaps'),
autoprefixer = require('gulp-autoprefixer'),
notify = require('gulp-notify');

var notifyOptions = {
  message : 'Error:: <%= error.message %> \nLine:: <%= error.line %> \nCode:: <%= error.extract %>'
};

/*
* compile theme scss
*/
gulp.task('theme-styles', function(){
  return gulp
  .src('./src/assets/scss/theme/theme.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error',  notify.onError(notifyOptions)))
  .pipe(autoprefixer({ overrideBrowserslist: ['last 99 versions'], cascade: false }))
  .pipe(concat('theme.min.css'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('././././build/assets/css/'));
});

/*
* compile theme js
*/
gulp.task('theme-scripts', function() {
  return gulp
  .src('./src/assets/js/theme/*.js')
  .pipe(concat('theme.min.js'))
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('././././build/assets/js/'));
});


/* run task for continuous track of theme scss files */
gulp.task('default', function(){
  gulp.watch('./src/assets/scss/theme/**/*.scss',  gulp.series('theme-styles'));
  gulp.watch('./src/assets/js/theme/*.js',  gulp.series('theme-scripts'));
});
