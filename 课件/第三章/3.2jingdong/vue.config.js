module.exports = {
  configureWebpack:{
      devServer:{
        //MOCK接口编写的地方
        //每次做更改这个配置文件的时候，都必须重启项目才会生效
        before(app){
          app.get('请求地址',(req,res)=>{
            res.json({
            })
          })
        }
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
