const clean = require('./clean')
const ejs = require('./ejs')
const sass = require('./sass')
const browserify = require('./browserify')
const assets = require('./assets')
const watch = require('./watch')
const webServer = require('./web_server')

module.exports = {
  clean,
  ejs,
  sass,
  browserify,
  assets,
  watch,
  webServer
}