const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const min = require('gulp-minify-inline');
const rename = require('gulp-rename');

function copy() {
    return src('input/*.js')
        .pipe(dest('output/'));
}

function js() {
    return src('input/*.js')
        .pipe(concat('build.js'))
        .pipe(dest('output/'))
        .pipe(min())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('output/'))
}

function defaultTask(cb) {
    cb();
}

module.exports = {
    defaultTask,
    copy,
    js
};