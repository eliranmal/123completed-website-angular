module.exports = function (grunt, shared) {
    return {
        dist: {
            files: [
                {
                    expand: true,
                    cwd: '<%= yeoman.dist %>/scripts',
                    src: '*.js',
                    dest: '<%= yeoman.dist %>/scripts'
                }
            ]
        }
    };
};