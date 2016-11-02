module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          ext: '-es6.js',
          src: ['public/js/main.js'],
          dest: 'dist/'
        }
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
};