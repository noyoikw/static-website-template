const gulp = require('gulp')
const config = require('../config')
const taskAssets = require('./assets')
const taskEjs = require('./ejs')
const taskSass = require('./sass')
const taskBrowserify = require('./browserify')
const taskReload = require('./reload')

module.exports = function taskWatch(cb) {
  gulp.watch(config.dir.base.src + config.dir.src.assets + '/**/*', gulp.series(taskAssets))
  gulp.watch(config.dir.base.src + config.dir.src.ejs + '/**/*', gulp.series(taskEjs))
  gulp.watch(config.dir.base.src + config.dir.src.sass + '/**/*', gulp.series(taskSass))
  gulp.watch(config.dir.base.src + config.dir.src.js + '/**/*', gulp.series(taskBrowserify))
  gulp.watch(config.dir.base.dest, gulp.series(taskReload))
  return cb()
}
