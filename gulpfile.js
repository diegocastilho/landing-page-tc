const { src, dest, watch } = require('gulp');
const concat = require('gulp-concat');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const sass = require('gulp-sass');

sass.compiler = require('node-sass');


// Função para juntar e minificar o scss em css
function stylesMethod() {

    return src("./src/scss/main.scss")
        .pipe(sass())
        .pipe(concat("all.css"))
        .pipe(cssmin())
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./dist"));

}

exports.styles = stylesMethod;


// Função para juntar e minificar o js
function scriptsMethod() {

    return src("./src/js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglify())
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./dist"));

}

exports.scripts = scriptsMethod;



// Modifica depois de cada alteração
function watchFiles() {

    watch("./src/scss/*.scss", stylesMethod);

    watch("./src/js/*.js", scriptsMethod);

}

exports.default = watchFiles;