'use strict';

module.exports = function (config) {

  config.set({

    autoWatch: true,

    basePath: 'src/',

    browsers: ['PhantomJS'],

    files: [
      '../bower_components/angular/angular.min.js',
      '../bower_components/angular-mocks/angular-mocks.js',
      'app.js',

      '../test/**.spec.js'
    ],

    frameworks: ['jasmine'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered
      // (useful if karma exits without killing phantom)
      exitOnResourceError: true
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    reporters: ['progress']
  });
};
