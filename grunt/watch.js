module.exports = function (grunt, shared) {
    return {
        compass: {
            files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
            tasks: ['compass:server']
        },
        livereload: {
            options: {
                livereload: shared.LIVERELOAD_PORT
            },
            files: [
                '<%= yeoman.app %>/{,*/}*.html',
                '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
            ]
        }
    };
};