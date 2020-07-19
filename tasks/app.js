const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');

const appHTML = () =>
  gulp
    .src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));

const appCSS = () =>
  gulp
    .src('src/assets/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({ uglyComments: true }))
    .pipe(concat('app.min.css'))
    .pipe(gulp.dest('dist/assets/css'));

const appIMG = () =>
  gulp.src('src/assets/images/**/*.*').pipe(gulp.dest('dist/assets/images'));

const appSVG = () =>
  gulp.src('src/assets/svg/**/*.svg').pipe(gulp.dest('dist/assets/svg'));

const appJS = () =>
  gulp
    .src('src/assets/js/**/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('dist/assets/js'));

gulp.task('appHTML', appHTML);
gulp.task('appCSS', appCSS);
gulp.task('appIMG', appIMG);
gulp.task('appJS', appJS);
gulp.task('appSVG', appSVG);

module.exports = {
  appHTML,
  appCSS,
  appIMG,
  appJS,
  appSVG
};
