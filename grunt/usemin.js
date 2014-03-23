module.exports = function (grunt, shared) {
    return {
        html: ['<%= yeoman.dist %>/{,*/}*.html'],
        css: ['<%= yeoman.dist %>/styles/**/*.css'],
        options: {
//                assetsDirs: ['<%= yeoman.dist %>', '<%= yeoman.dist %>/images'],
            dirs: ['<%= yeoman.dist %>']
        }
    };
};