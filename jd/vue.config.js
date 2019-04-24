module.exports = {
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
    },

    configureWebpack : {
        devServer : {
            open : true,
            //mock编写接口的地方
            //每次更改这个配置文件的时候,都必须重启项目才会生效
            before(app){
                //创建用户信息池
                let userPoor = [
                    {username : "jack",password : "123456"},
                    {username : "rose",password : "789456"}
                ];
                //注册接口
                app.get("/api/register",(req,res)=>{
                    console.log(req.query)
                    const {username,password} = req.query;
                    const userLength = userPoor.filter(item=>item.username == username).length;
                    if(userLength > 0){
                        res.json({
                            success : false,
                            message : "用户名已存在"
                        })
                    }else{
                        res.json({
                            success : true,
                            message : "注册成功"
                        })
                    }
                });
                //登录接口
                //创建token
                let tokenKey = "yangling";
                app.get("/api/login",(req,res)=>{
                    const {username,password} = req.query;
                    if(username == "jack" && password == "123456" || username == "rose" && password == "123456"){
                        res.json({
                           code : 0,
                           token : tokenKey + "-" + username + "-" + (new Date().getDate() + 60*60*1000),
                           message : "注册成功"
                        })
                    }else{
                        res.json({
                            code : 1,
                            message : "用户名或密码错误"
                        })
                    }
                })

                //首页轮播图接口
                app.get("/api/banner",(req,res)=>{
                    res.json({
                        data:[  {
                            url: 'https://m.xdclass.net',
                            image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/learn.png'
                             },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/upload/banner/devpay.png'
                            },
                            {
                                url: 'https://m.xdclass.net',
                                image: 'https://xd-video-pc-img.oss-cn-beijing.aliyuncs.com/xdclass_pro/bannner/1901/bat.png'
                            }]
                    })

                })
            }
        }
    }
};
