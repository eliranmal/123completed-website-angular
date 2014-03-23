// Generated on 2013-11-30 using generator-angular 0.3.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // define global config
    var gruntConfig = {},
        shared = {
            LIVERELOAD_PORT: 35729
        };


    // load all grunt plugins
    [
        'yeoman',
        'watch',
        'connect',
        'open',
        'clean',
        'jshint',
        'compass',
        'rev',
        'useminPrepare',
        'usemin',
        'imagemin',
        'cssmin',
        'htmlmin',
        'copy',
        'concurrent',
        'karma',
        'ngmin',
        'uglify',
        'ftp-deploy'
    ]
        .forEach(function (fileName) {
            gruntConfig[fileName] = require('./grunt/' + fileName + '.js')(grunt, shared);
        });

    // load the grunt Config
    grunt.initConfig(gruntConfig);


    // register tasks
    grunt.registerTask('deploy', [
        'build',
        'ftp-deploy'
    ]);

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'concat',
        'copy',
        'ngmin',
        'cssmin',
        'uglify',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
