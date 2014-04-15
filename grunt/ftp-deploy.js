module.exports = function (grunt, shared) {
    return {
        build: {
            auth: {
                host: '65.75.158.216', // www.eliranmalka.com
                port: 21 // ftp port
//                    authKey: 'key1'
            },
            src: '<%= yeoman.dist %>',
            dest: '/public_html/123preview',
            exclusions: [ 'bower_components']
        }
    };
};