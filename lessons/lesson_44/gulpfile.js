const { src, dest, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const autoprefixer = require("gulp-autoprefixer");
const cssmin = require("gulp-cssmin");
const browserSync = require("browser-sync").create();
const pug = require("gulp-pug");

const src_path = 'mashtaler';
const dest_path = 'build'

function log(error) {
  console.log(
    [
      "",
      "----------ERROR MESSAGE START----------",
      "[" + error.name + " in " + error.plugin + "]",
      error.message,
      "----------ERROR MESSAGE END----------",
      ""
    ].join("\n")
  );
  this.end();
}



function html() {
  return src(`${src_path}/templates/*.pug`)
    .pipe(pug({ pretty: false }))
    .on("error", log)
    .pipe(dest(`${dest_path}/`))
    .pipe(browserSync.stream());
}

function css() {
  return src(`${src_path}/scss/style.scss`)
    .pipe(
      sass().on("error", function (error) {
        console.log(error);
      })
    )
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%", "ie 11"]
      })
    )
    .pipe(cssmin())
    .pipe(dest(dest_path))
    .pipe(browserSync.stream());
}

function server() {
  browserSync.init({
    server: dest_path,
    browser: "chrome",
    notify: false
  });
}

function watcher() {
  server();
  // watch(`${src_path}/img/**/*.*`, img);
  watch(`${src_path}/templates/**/*.pug`, html);
  watch(`${src_path}/scss/**/*.scss`, css);
  // watch(`${src_path}/js/**/*.js`, js);
}



// exports.js = js;
exports.css = css;
exports.html = html;
// exports.img = img;
exports.server = server;
// exports.build = parallel(html, сss);
exports.build = parallel(html, css);
exports.default = watcher;