var gulp = require('gulp');
var browserify = require('browserify');
var through2 = require('through2');

gulp.task('default', function () {
  return gulp.src(['./src/*.js'])
    .pipe(through2.obj(function (file, enc, next) {
        browserify(file.path, { debug: process.env.NODE_ENV === 'development' })
          .transform("babelify", {presets: ["es2015", "react"]})
          .bundle(function (err, res) {
              if (err) { return next(err); }
              file.contents = res;
              next(null, file);
          });
    }))
    .pipe(gulp.dest('./dist'));
});
