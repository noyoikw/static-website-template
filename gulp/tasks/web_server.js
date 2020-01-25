const browserSync = require('browser-sync')
const config = require('../settings/config')

module.exports = function taskWebServer(cb) {
  const options = {
    server: { baseDir: config.dir.base.dest },
    port: config.port
  }
  browserSync.init(options)
  return cb()
}