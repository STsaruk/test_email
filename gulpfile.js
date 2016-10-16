var gulp = require('gulp'),

    inlineCss = require('gulp-inline-css');



gulp.task('inline', function() {
    return gulp.src('./*.html')
        .pipe(inlineCss({
            applyStyleTags: true,
            applyLinkTags: true,
            removeStyleTags: true,
            removeLinkTags: true,
            preserveMediaQueries: true
        }))
        .pipe(gulp.dest('build/'));
});
