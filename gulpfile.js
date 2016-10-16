var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

    // server connect
    gulp.task('connect', function() {
        connect.server({
            root: 'build',
            livereload: true
        });
    });

    //inliner
    gulp.task('inline', function() {
        return gulp.src('src/*.html')
            .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: true,
                removeLinkTags: true,
                preserveMediaQueries: true
            }))
            .pipe(gulp.dest('build/'));
    });

    //watch
    gulp.task('watch', function () {
        gulp.watch('src/css/*.css', ['inline'])
        gulp.watch('src/*.html', ['inline'])
    });
    
    //default
    gulp.task('default', ['connect', 'inline', 'watch']);