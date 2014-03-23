module.exports = function (grunt, shared) {
    return {
        options: {
            jshintrc: '.jshintrc'
        },
        all: [
            'Gruntfile.js',
            '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
    };
};