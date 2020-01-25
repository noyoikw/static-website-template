const gulp = require('gulp')
const path = require('path')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const rename = require('gulp-rename')
const notify = require('gulp-notify')
const { sync } = require('glob')
const { merge } = require('event-stream')
const config = require('../config')

module.exports = function taskBrowserify(cb) {
  const entries = config.js.entries ||
    sync(`${config.dir.base.src}${config.dir.src.js}/!(_)*.js`)
      .map(entry => path.basename(entry))
  const tasks = entries.map(entry => {
    return browserify({ entries: [`${config.dir.base.src}${config.dir.src.js}/${entry}`] })
      .transform(babelify, { presets: config.js.babelPresets })
      .bundle()
      .on('error', notify.onError('Error: <%= error.message %>'))
      .pipe(source(entry))
      .pipe(rename({ extname: config.js.extname + '.js' }))
      .pipe(gulp.dest(config.dir.base.dest + config.dir.dest.js))
  })
  merge.apply(null, tasks)
  return cb()
}