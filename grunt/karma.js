module.exports = function (grunt, shared) {
    return {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
    };
};