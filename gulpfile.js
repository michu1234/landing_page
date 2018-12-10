var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')
      .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./assets/css'))
      .pipe(livereload({ start: true }));
   });


   gulp.task('watchIt', function () {
    gulp.watch('./assets/scss/**/*.scss', ['sass']);
  });