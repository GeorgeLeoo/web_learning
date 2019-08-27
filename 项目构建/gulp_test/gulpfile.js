var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 注册任务
// 合并压缩js
// npm i --save-dev gulp-concat gulp-uglify gulp-rename
gulp.task('js', function () {
    return gulp
        .src('src/js/**/*.js')  // 找到目标源文件，将数据读到gulp内存中，包括src/js中的子文件夹中内容
        .pipe(concat('build.js'))   // 临时合并文件
        .pipe(gulp.dest('dist/js/'))   // 输出文件
        .pipe(uglify())     // 压缩文件
        .pipe(rename({suffix: '.min'}))    //  重命名
        .pipe(gulp.dest('dist/js/'))
});

//注册默认任务
gulp.task('default', [], function() {
    // 将你的默认的任务代码放在这
});