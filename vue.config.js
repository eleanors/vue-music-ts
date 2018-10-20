module.exports = {
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': []
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: false,
            theme: false
        }
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: false
        }
    },
    lintOnSave: false,
}
