var gulp = require('gulp');
var sass = require('gulp-sass');
var browsersync = require('browser-sync').create();

gulp.task('serve', ['sass'], function(){
    browsersync.init({
        dir: './dist'
    });
    
    gulp.watch('css/**/*.sass', ['sass']);
    gulp.watch('dist/index.html').on('change', browsersync.reload);
});

gulp.task('sass', function(){
    return gulp.src('css/style.sass')
        .pipe(sass())
        gulp.dest('dist');
});