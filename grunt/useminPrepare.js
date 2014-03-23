module.exports = function (grunt, shared) {
    return {
        html: '<%= yeoman.app %>/index.html',
        options: {
            dest: '<%= yeoman.dist %>'
        }
    };
};