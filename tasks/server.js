const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');
const { series } = gulp;

const server = () =>
  gulp.src('dist').pipe(
    webserver({
      port: 8000,
      open: true,
      livereload: true
    })
  );

const watcher = (callback) => {
  watch('src/**/*.html', () => series('appHTML')());
  watch('src/**/*.scss', () => series('appCSS')());
  watch('src/**/*.js', () => series('appJS')());
  watch('src/assets/images/**/*.*', () => series('appIMG')());
  watch('src/assets/icons/**/*.*', () => series('appIcons')());
  watch('src/assets/svg/**/*.svg', () => series('appSVG')());

  return callback();
};

module.exports = { server, watcher };
