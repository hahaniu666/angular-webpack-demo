

https://github.com/PinkyJie/angular1-webpack-starter#features
https://github.com/fouber/blog/issues/10


```
webpack-dev-server
浏览器直接访问 http://localhost:8080/

webpack --env.prod


future states 所有的 js，css，html都打包到js中。
```


webpack-bundle-report



# 运行

    npm run webpack -- --env=dev


# webpack-dev-server配置

 需要插件，将下面的代码放入plugins最下面
 
     new webpack.HotModuleReplacementPlugin()
     
     
 整体配置如下：
    
     devServer: {
            contentBase: path.resolve(base, outputPath),
            historyApiFallback: true,
            stats: {
                modules: false,
                cached: false,
                colors: true,
                chunk: false
            },
            host: '0.0.0.0',
            port: 8080,
            inline: true,
            hot: true,  //配置热启动
            open:true,  //需要true才能执行
            clientLogLevel: "info",
            compress: false,
            quiet: false
        },



# 执行代码

先  

    npm run webpack -- --env=dev

然后
    
    webpack-dev-server --open --env dev --host 192.168.0.41
