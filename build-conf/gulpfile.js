var gulp = require('gulp'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('build-client-sass', function() {
    var config = {
        src: '../src/client/assets/scss/neal-react.scss',
        dest: '../src/client/assets/css'
    };
    return gulp.src(config.src)
        .pipe(sass())
        .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
        .pipe(gulp.dest(config.dest, {overwrite: true}));
});


