var {src, dest} = require("gulp");
var {init, write} = require("gulp-sourcemaps");
var {reload} = require("gulp-connect");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");

function cssHandler(){
    return src("./src/scss/**/*.scss")
        .pipe(init())
        .pipe(sass())
        .pipe(cleanCSS({compatibility: "ie9"}))
        .pipe(write("."))
        .pipe(dest("./dist/assets/css"))
		.pipe(reload());
}
module.exports = cssHandler;