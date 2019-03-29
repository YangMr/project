module.exports = {
    configureWebpack : {
        devServer : {
            open : true,
            port : 8080
        },
        //mock数据
        before(app){

        }
    },

    css: {
      loaderOptions: {
        stylus: {
          'resolve url': true,
          'import': [
            './src/theme'
          ]
        }
      }
    },

    pluginOptions: {
      'cube-ui': {
        postCompile: true,
        theme: true
      }
    }
}
