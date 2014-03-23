module.exports = function (grunt, shared) {
    return {
        dist: {
            files: [
                {
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/*',
                        '!<%= yeoman.dist %>/.git*'
                    ]
                }
            ]
        },
        server: '.tmp'
    };
};