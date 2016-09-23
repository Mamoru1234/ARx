var gulp = require('gulp');
var babel = require('gulp-babel');
var clean = require('gulp-clean');

gulp.task('clean', function () {
   return gulp.src('build', {read: false})
       .pipe(clean())
});

gulp.task('build', function () {
   return gulp.src('src/app.js')
       .pipe(babel())
       .pipe(gulp.dest('build/'))
});
