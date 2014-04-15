
var yeoman = require('./yeoman'),
    modRewrite = require('connect-modrewrite'),
    connectLivereload = require('connect-livereload'),
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

module.exports = function (grunt, shared) {
    var lrSnippet = connectLivereload({ port: shared.LIVERELOAD_PORT }),
        yeomanConfig = yeoman(grunt, shared);
    return {
        options: {
            port: 9000,
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost'
        },
        livereload: {
            options: {
                middleware: function (connect) {
                    return [
                        modRewrite([
                            '!\\.\\w+$ /'
                        ]),
                        lrSnippet,
                        mountFolder(connect, '.tmp'),
                        mountFolder(connect, yeomanConfig.app)
                    ];
                }
                /*
                 middleware: function (connect) {
                 grunt.log.writeln('- - - -- - - yo yo yo livereload');
                 return [
                 lrSnippet,
                 mountFolder(connect, '.tmp'),
                 mountFolder(connect, yeomanConfig.app)
                 ];
                 }
                 */
            }
        },
        test: {
            options: {
                middleware: function (connect) {
                    return [
                        mountFolder(connect, '.tmp'),
                        mountFolder(connect, 'test')
                    ];
                }
            }
        },
        dist: {
            options: {
                middleware: function (connect) {
                    return [
                        mountFolder(connect, yeomanConfig.dist)
                    ];
                }
            }
        }
    };
};