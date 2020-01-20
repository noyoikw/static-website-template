const gulp = require('gulp')
const tasks = require('./tasks')

module.exports = gulp.series(
  gulp.parallel(tasks.clean),
  gulp.parallel(tasks.ejs, tasks.sass, tasks.babel, tasks.assets),
  gulp.parallel(tasks.webServer, tasks.watch)
)