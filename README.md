

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



# 一些全局配置记录

### 1.设置默认访问页面，在下面的js中

     angular-webpack-demo/src/app/components/_common/confUrlRouter.js
    
前提是在confstate.js中要配置好路径，如下

```$xslt


    function confState($stateProvider) {
        $stateProvider.state("main.ddd", {
            url: "/ddd",
            sticky: true,
            deepStateRedirect: true,
            views: {
                "ddd@main": {
                    template: html,
                    controller: controller
                }
            }
        });
    }

```
 代码中的url:"/ddd"，若是想默认访问此页面，则，在上述路径下的js中，
 
     $urlRouterProvider.otherwise('/ddd');       
 即可，


### 2.配置开发环境还是测试环境或者线上环境

在以下目录下

    angular-webpack-demo/src/app/components/_conf
    
其中，conf需配置成service服务，然后在各个js文件中依赖注入以下conf，然后

    console.log(conf);
    
即可看到里面的配置文件内容

### 3.异步加载必须代码

    angular-webpack-demo/src/app/components/_state


# 通过nodejs 的http-server访问build，类似webpack-dev-server一样的效果

首先安装http-server

    npm install http-server -g
    
然后执行 在项目根目录下执行

    http-server 
