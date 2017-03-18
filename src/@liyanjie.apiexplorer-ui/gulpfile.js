var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var ts = require('gulp-typescript');
var del = require('del');
var
    concat = plugins.concat,
    rollup = plugins.rollup,
    typescript = plugins.typescript,
    sass = plugins.sass,
    rename = plugins.rename,
    minifyJs = plugins.uglify,
    minifyCss = plugins.minifyCss,
    minifyHtml = plugins.minifyHtml;

gulp.task('clean', function () {
    del(['dist/css', 'dist/js', 'dist']);
});
gulp.task('copy', function () {
    gulp.src('./node_modules/font-awesome/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./node_modules/font-awesome/css/*.*')
        .pipe(gulp.dest('./dist/css'));
    gulp.src(['./node_modules/core-js/client/shim.js', './node_modules/zone.js/dist/zone.js', './node_modules/reflect-metadata/reflect.js'])
        .pipe(concat('env.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyJs())
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('build:css', function () {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('build:html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('./dist'));
});
gulp.task('build:js', function () {
    return gulp.src('./build/*.js')
        .pipe(ts({
            allowJs: true,
            target: 'es5'
        }))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyJs())
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('build', ['build:css', 'build:html', 'build:js']);
gulp.task('default', ['clean', 'copy', 'build']);
gulp.watch('src/**/*.scss', ['build:css']);
gulp.watch('src/**/*.html', ['build:html']);
gulp.watch('build/*.js', ['build:js']);