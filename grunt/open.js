module.exports = function (grunt, shared) {
    return         {
        server: {
            url: 'http://localhost:<%= connect.options.port %>'
        }
    };
};
