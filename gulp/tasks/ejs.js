const gulp = require('gulp')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')
const plumber = require('gulp-plumber')
const notify = require('gulp-notify')
const config = require('../config')

module.exports = function taskEjs() {
  return gulp.src([
    config.dir.base.src + config.dir.src.ejs + '/**/*.ejs',
      '!' + config.dir.base.src + config.dir.src.ejs + '/**/_*.ejs'
    ])
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(sourcemaps.write())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest(config.dir.base.dest + config.dir.dest.html))
}
