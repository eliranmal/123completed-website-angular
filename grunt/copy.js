module.exports = function (grunt, shared) {
    return {
        dist: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
//                            'images/**/*.{png,jpg,jpeg,gif,webp,svg}',
                        'styles/fonts/**/*.{svg,woff,eot,ttf,css}',
                        'data/*.json'
                    ]
                },
                {
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: [
                        'generated/*'
                    ]
                }
            ]
        }
    };
};