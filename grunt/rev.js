module.exports = function (grunt, shared) {
    return {
//            img: ['images/**/*.png', '!images/staff/**/*.png'],
        dist: {
            files: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/styles/{,*/}*.css',
                    [
                        '<%= yeoman.dist %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                        '!<%= yeoman.dist %>/images/no-revision/**/*.{png,jpg,jpeg,gif,webp,svg}' // excluding
                    ],
                    '<%= yeoman.dist %>/styles/fonts/**/*.{svg,woff,eot,ttf,css}'
//                        '<%= yeoman.dist %>/styles/fonts/**/*.*'
                ]
            }
        }
    };
};