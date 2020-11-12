var {task, watch, parallel, series} = require("gulp");
var {server} = require("gulp-connect");

var htmlHandler = require("./gulp-modules/html-handler");
var cssHandler = require("./gulp-modules/css-handler");

function watchAll(){
    watch("./src/html/**/*.html", {ignoreInitial: false}, htmlHandler);
    watch("./src/scss/**/*.scss", {ignoreInitial: false}, cssHandler);
}

function serve() {
    return server({
      root: 'dist',
      livereload: true,
      port: 8080
    });
}

task("mytask", parallel(serve, watchAll));

task("build", series(htmlHandler, cssHandler))