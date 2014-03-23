module.exports = function (grunt, shared) {
    return {
        options: {
            sassDir: '<%= yeoman.app %>/styles',
            cssDir: '.tmp/styles',
            generatedImagesDir: '.tmp/images/generated',
            imagesDir: '<%= yeoman.app %>/images',
            javascriptsDir: '<%= yeoman.app %>/scripts',
            fontsDir: '<%= yeoman.app %>/styles/fonts',
            importPath: '<%= yeoman.app %>/bower_components',
            httpImagesPath: '/images',
            httpGeneratedImagesPath: '/images/generated',
            httpFontsPath: '/styles/fonts',
            relativeAssets: false
        },
        dist: {},
        server: {
            options: {
                debugInfo: true
            }
        }
    };
};