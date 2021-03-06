module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> \n Copyright 2014 Coggle, except where noted. License: MIT, except where noted. */\n',
        preserveComments:'some',
        sourceMap: false,
        /*sourceMapName: 'public/<%= pkg.name %>.sourcemap',*/
        mangle:false
      },
      dist: {
        files: {
          'public/javascripts/main.js': ['private/javascripts/main.js']
        }
      }
    },
    jshint: {
      files: ['*.js', 'private/**/*.js',],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      app: {
        files: ['private/javascripts/*.js'],
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jsjsdoc');

  grunt.registerTask('default', ['uglify', 'jshint', 'watch']);
  
};

