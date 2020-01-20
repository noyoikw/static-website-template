const fs  = require('fs')
const del = require('del')
const config = require('../config')

module.exports = function taskClean(cb) {
  if (!fs.existsSync(config.dir.base.dest)) fs.mkdirSync(config.dir.base.dest)
  return del(config.dir.base.dest + '/**/*', cb)
}
