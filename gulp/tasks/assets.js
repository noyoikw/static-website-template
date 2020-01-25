const gulp = require('gulp')
const config = require('../settings/config')

module.exports = function taskAssets() {
  return gulp.src(config.dir.base.src + config.dir.src.assets + '/**/*')
    .pipe(gulp.dest(config.dir.base.dest + config.dir.dest.assets))
}
