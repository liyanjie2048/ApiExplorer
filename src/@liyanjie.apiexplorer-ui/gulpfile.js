var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var
    concat = plugins.concat,
    rename = plugins.rename,
    minifyJs = plugins.uglify,
    minifyCss = plugins.minifyCss,
    minifyHtml = plugins.minifyHtml;

gulp.task('build', function () {
    return gulp.src('./src/*.css')
        //.pipe(sass())
        .pipe(gulp.dest('./build'));
    //.pipe(rename({ suffix: '.min' }))
    //.pipe(minifyCss())
    //.pipe(gulp.dest('./dist/css'));
});
gulp.task('dist', function () {
    gulp.src('./node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./node_modules/font-awesome/css/*.*')
        .pipe(gulp.dest('./dist/css'));
    gulp.src(['./node_modules/core-js/client/shim.js', './node_modules/zone.js/dist/zone.js'])
        .pipe(concat('env.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyJs())
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./build/*.css')
        .pipe(gulp.dest('./dist/css'));
    gulp.src('./build/*.js')
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyJs())
        .pipe(gulp.dest('./dist/js'));
});