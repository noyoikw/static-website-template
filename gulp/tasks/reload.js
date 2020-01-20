const browserSync = require('browser-sync')

module.exports = function taskReload(cb) {
  browserSync.reload()
  return cb()
}