const gulp = require('gulp');
const { series } = gulp;

const {
  appCSS,
  appHTML,
  appIMG,
  appJS,
  appIcons,
  appSVG,
  appData
} = require('./tasks/app');
const { watcher, server } = require('./tasks/server');

exports.default = series(
  appHTML,
  appCSS,
  appJS,
  appIMG,
  appIcons,
  appSVG,
  appData,
  server,
  watcher
);
