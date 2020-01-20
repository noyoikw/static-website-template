const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const notify = require('gulp-notify')
const config = require('../config')

module.exports = function taskSass() {
  const options = {
    sourceMap: true,
    outputStyle: 'expanded'
  }
  return gulp.src(config.dir.base.src + config.dir.src.sass + '/**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(sass(options))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dir.base.dest + config.dir.dest.css))
}
