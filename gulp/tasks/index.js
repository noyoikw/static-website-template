const clean = require('./clean')
const ejs = require('./ejs')
const sass = require('./sass')
const babel = require('./babel')
const assets = require('./assets')
const watch = require('./watch')
const webServer = require('./web_server')

module.exports = {
  clean,
  ejs,
  sass,
  babel,
  assets,
  watch,
  webServer
}