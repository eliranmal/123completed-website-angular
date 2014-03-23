module.exports = function (grunt, shared) {
    return {
        server: [
            'compass:server'
        ],
        test: [
            'compass'
        ],
        dist: [
            'compass:dist',
            'imagemin',
            'htmlmin'
        ]
    };
};