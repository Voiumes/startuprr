const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('copyHtml', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('public'));
});
gulp.task('babel', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
);

gulp.task('sass', ()=>{
    gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
});


gulp.task('all', ['copyHtml','babel','sass']);

gulp.task('watch', () =>{
    gulp.watch('src/*.html', ['copyHtml']);
    gulp.watch('src/js/*.js', ['babel']);
    gulp.watch('src/scss/*.scss', ['sass']);

});
