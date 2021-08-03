'use strict';

const { src, dest, series, watch } = require('gulp');
const scss = require('gulp-sass');
const pug = require('gulp-pug');

function buildScss() {
    return src('./src/sass/styles.sass')
        .pipe(scss({
            includePaths: ['node_modules']
        }))
        .pipe(dest('./dist/css'));
}

function buildHtml() {
  return src('./src/pug/*.pug')
    .pipe(pug({
      doctype: 'html',
      pretty: true
    }))
    .pipe(dest('./'));
}

function buildVendors() {
  return src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
    './node_modules/owl.carousel2/dist/owl.carousel.min.js',
    './node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
  ])
    .pipe(dest('./dist/js/vendors/'));
}



function watcher() {
    watch('./src/sass/**/*.sass', { usePolling: true }, buildScss);
}



exports.watch = series( buildScss, watcher);

exports.build = buildScss;
exports.html = buildHtml;