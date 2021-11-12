const gulp = require("gulp");
const { src, dest, watch, series } = require("gulp");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const minify = require("gulp-clean-css");

function htmlFile() {
    return src("src/html/*.html").pipe(htmlmin()).pipe(dest("dist/html"));
}

function styles() {
    return src("src/scss/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(minify())
        .pipe(dest("dist/css"));
}

function scripts() {
    return src(["src/js/*.js"]).pipe(concat("all.js")).pipe(dest("dist/js"));
}
exports.default = series(htmlFile, styles, scripts);