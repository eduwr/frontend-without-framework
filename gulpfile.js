const gulp = require('gulp');
const { series } = gulp;

const {
  appCSS,
  appHTML,
  appIMG,
  appJS,
  appIcons,
  appSVG
} = require('./tasks/app');
const { watcher, server } = require('./tasks/server');

exports.default = series(
  appHTML,
  appCSS,
  appJS,
  appIMG,
  appIcons,
  appSVG,
  server,
  watcher
);
