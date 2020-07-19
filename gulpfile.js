const gulp = require('gulp');
const { series } = gulp;

const { appCSS, appHTML, appIMG, appJS, appSVG } = require('./tasks/app');
const { watcher, server } = require('./tasks/server');

exports.default = series(
  appHTML,
  appCSS,
  appJS,
  appIMG,
  appSVG,
  server,
  watcher
);
