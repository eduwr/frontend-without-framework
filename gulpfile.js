const gulp = require('gulp');
const { series } = gulp;

const { appCSS, appHTML, appIMG, appJS, appIcons } = require('./tasks/app');
const { watcher, server } = require('./tasks/server');

exports.default = series(
  appIMG,
  appIcons,
  appHTML,
  appCSS,
  appJS,
  server,
  watcher
);
