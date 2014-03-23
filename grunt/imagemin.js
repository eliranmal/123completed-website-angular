module.exports = function (grunt, shared) {
    return {
        dist: {
            options: {
                cache: false // working around an issue on v0.5.0: https://github.com/gruntjs/grunt-contrib-imagemin/issues/140
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '**/*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }
            ]
        }
    };
};