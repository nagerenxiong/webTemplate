var  path_src=require('path'),
  changed = require('gulp-changed'),
  gulp = require('gulp'),
   del = require('del'),
  base64 = require('gulp-base64'),
  browserSync = require('browser-sync').create(),
  reload= browserSync.reload;
  inline_base64 = require('gulp-inline-base64'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  allBase64=require('gulp-all-base64'),
  concat = require('gulp-concat'),
  sass = require('gulp-ruby-sass'),
  rename = require('gulp-rename'),
  webpack = require("webpack"),
  webpackConfig = require("./webpack.config.js");
  gutil = require("gulp-util"),
  imagemin = require('gulp-imagemin')

// 静态服务器 + 监听 scss/html 文件
// gulp.task('serve', ['css'], function() {

//     browserSync.init({
//         server: "./",
//         files:"**"
//     });

//     gulp.watch("css/**/*.scss", ['css']);
//     gulp.watch("*.html").on('change', reload);
//     browserSync.reload("*.css");
// });
gulp.task('watch',function(){
  gulp.watch(['static/website/css/**/*.scss','static/website/js/**/*.js','!static/website/js/**/*.wmin.js*'], ['webpack'])
;})

gulp.task("webpack", function(callback) {
  var myConfig = Object.create(webpackConfig);
  // run webpack
  webpack(
    // configuration
    myConfig,
    function(err, stats) {
      // if(err) throw new gutil.PluginError("webpack", err);
      // gutil.log("[webpack]", stats.toString({
      //   // output options
      // }));
      callback();
    });
});
gulp.task('test',function(){
  console.log(__dirname);
  console.log(__filename);
})

gulp.task('css', function() {
  return sass('css/**/*.scss', {
      sourcemap: false
    })
    .pipe(base64({
        baseDir:'/',
            extensions: ['svg', 'png', /\.jpg#datauri$/i],
            // exclude:    [/\.server\.(com|net)\/dynamic\//, '--live.jpg'],
            maxImageSize: 10*1024, // bytes 1MB=1024×1024Bytes
            debug: true
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifycss())
    .pipe(rename({
      suffix: '.min'
    }))
    // .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('css/'))
});

// Images
gulp.task('images', function() {
  return gulp.src('app/img/**/*') //**是指包括下级的所有目录
    .pipe(imagemin({
      optimizationLevel: 1,
      progressive: true,
      interlaced: true
    })) //级别越高压缩越大
    .pipe(gulp.dest('bundle/img'))
});
gulp.task('clean', function() {
  return del(['bundle/html/*', 'bundle/css/*', 'bundle/js/*']);
});