"use strict";

let gulp = require( "gulp" ),
    watch = require( "gulp-watch" ),
    rigger = require( "gulp-rigger" ),
    concat = require( "gulp-concat" ),
    sourcemaps = require( "gulp-sourcemaps" ),
    cssmin = require( "gulp-minify-css" ),
    minify = require( "gulp-minify" ),
    sass = require( "gulp-sass" ),
    rename = require( "gulp-rename" ),
    browserSync = require( "browser-sync" ),
    reload = browserSync.reload,
    prefixer = require( "gulp-autoprefixer" );

let lib = "../assets/";
let config = {
    server: {
        baseDir:  "../",
        index: "index.html"
    },
    port: 9000,
    open: true,
    notify: false
};

let projectPaths = {
    "app" : {
        "css" : [
            lib + "css/sass/main.sass"
        ],
        "js" : [
            lib + "js/functions/main.js"
        ]
    },
    "watch" : {
        "css" : [
            lib + "css/sass/*.sass",
            lib + "css/sass/**/*.sass"
        ],
        "js" : [
            lib + "js/functions/*.js",
            lib + "js/functions/**/*.js"
        ]
    },
    "dist" : {
        css: lib + "css/",
        js: lib + "js/"
    }
};

function JsWatch(){
    return gulp.src( projectPaths.app.js )
            .pipe( concat( "main.js" ) )
            .pipe( rigger() )
            .pipe( sourcemaps.init() )
            .pipe( minify() )
            .pipe( sourcemaps.write() )
            .pipe( gulp.dest( projectPaths.dist.js ) )
            .pipe( reload( { stream: true } ) );
}

function JsBuild(){
    return gulp.src( projectPaths.app.js )
            .pipe( concat( "main.js" ) )
            .pipe( rigger() )
            .pipe( minify() )
            .pipe( gulp.dest( projectPaths.dist.js ) )
            .pipe( reload( { stream: true } ) );
}

function StylusBuild(){
    return gulp.src( projectPaths.app.css )
            .pipe( sourcemaps.init() )
            .pipe( sass().on('error', sass.logError) )
            .pipe( concat("style.css") )
            .pipe( prefixer( [
                    'last 15 versions',
                    '> 1%',
                    'ie 8',
                    'ie 7'
                ],
                { cascade: true }
                )
            )
            .pipe( sourcemaps.write() )
            .pipe( gulp.dest( projectPaths.dist.css ) )
            .pipe( reload( { stream: true } ) );
}

function CssBuild(){
	return gulp.src( projectPaths.dist.css + "style.css"  )
		.pipe( cssmin() )
		.pipe( rename( { suffix: ".min" } ) )
		.pipe( gulp.dest( projectPaths.dist.css ) )
        .pipe( reload( { stream: true } ) );
}

let css = gulp.series( StylusBuild, CssBuild );

function WatchFiles(){
    watch( projectPaths.watch.css, css );
    watch( projectPaths.watch.js, JsWatch );
}
function Webserver() {
    browserSync.init(config);
}

gulp.task( "js:build", JsBuild );
gulp.task( "css:build", css );
gulp.task( "build", gulp.series( JsBuild, css ) );
gulp.task( "watch", gulp.parallel( WatchFiles, Webserver ) );
gulp.task( "webserver", Webserver );