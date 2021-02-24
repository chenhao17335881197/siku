let {dest,src,watch} = require('gulp');
let htmlmin = require('gulp-htmlmin');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let babel = require('gulp-babel');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');


function fnCopyIndex(){
    return src('./src/index.html')
    .pipe(htmlmin())
    .pipe(dest('./dist'));
}

function fnCss(){
    return src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'compact'}))
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/css'));
}

function fnImg(){
    return src('./src/img/**')
    .pipe(imagemin())
    .pipe(dest('./dist/img'));
}

function fnJs(){
    return src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/js'));
}

function fnPage(){
    return src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/pages'));
}

function fnlib(){
    return src('./src/lib/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename({suffix : '.min'}))
    .pipe(dest('./dist/lib'));
}

function fnWatch(){
    watch('./src/index.html',fnCopyIndex);
    watch('./src/sass/*.scss',fnCss);
    watch('./src/img/**',fnImg);
    watch('./src/js/*.js',fnJs);
    watch('./src/pages/*.html',fnPage);
    watch('./src/lib/*.js',fnlib)
}



exports.index = fnCopyIndex;
exports.css = fnCss;
exports.img = fnImg;
exports.js = fnJs;
exports.page = fnPage;
exports.lib = fnlib;
exports.default = fnWatch;