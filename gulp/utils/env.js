const minimist = require('minimist')
const env = minimist(process.argv.slice(2)).env
module.exports = env
