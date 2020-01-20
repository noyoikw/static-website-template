const gulp = require('gulp')
const plumber = require('gulp-plumber')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const notify = require('gulp-notify')
const config = require('../config')

module.exports = function taskBabel() {
  const options = {
    presets: ['@babel/preset-env']
  }
  return gulp.src(config.dir.base.src + config.dir.src.js + '/**/*.js')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(babel(options))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dir.base.dest + config.dir.dest.js))
}