module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig( {
    pkg: grunt.file.readJSON('package.json'),

    connect: {
        options: {
            port: 9000,
            livereload: 35729,
            hostname: 'localhost'
        },
        livereload: {
            options: {
                open: {
                     target: 'http://localhost:9000'
                },
                base: [
                    '.'
                ]
            }
        }
    },

    photobox: {
      options: {
        urls: [ 'http://localhost:9000/' ],
        screenSizes: [ '400x800', '600x800', '1200x800' ]
      }
    },

    watch: {
      files: ['css/main.css'],
      tasks: ['photobox']
    }
  } );

  // Load photobox plugin
  grunt.loadNpmTasks( 'grunt-photobox' );
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask( 'default', [ 'connect', 'watch' ] );
};
