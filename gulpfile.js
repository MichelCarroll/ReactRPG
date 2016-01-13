var gulp = require('gulp');
var browserify = require('browserify');
var through2 = require('through2');
var reactify = require('reactify');
var babelify = require('babelify');


gulp.task('default', function () {
  return gulp.src(['./src/*.js'])
    .pipe(through2.obj(function (file, enc, next) {
        browserify(file.path, { debug: process.env.NODE_ENV === 'development' })
          .transform(reactify)
          .transform(babelify)
          .bundle(function (err, res) {
              if (err) { return next(err); }

              file.contents = res;
              next(null, file);
          });
    }))
    .pipe(gulp.dest('./dist'));
});
