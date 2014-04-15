module.exports = function (grunt, shared) {
    return {
        dist: {
            files: {
                '<%= yeoman.dist %>/scripts/scripts.js': [
                    '<%= yeoman.dist %>/scripts/scripts.js'
                ]
            }
        }
    };
};