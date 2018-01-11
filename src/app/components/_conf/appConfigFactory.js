// function appConfigFactory() {
//
//     let domain = "//kingsilk.net";
//     let rootUrl = "/qh/admin/local/16600";   // 如果后台开发人员使用本地启动的API，仅仅修改此行的端口即可，不要提交修改。
//     let rootPath = domain + rootUrl;
//     let apiPath = domain + "/qh/admin/local/16600" + "/api";
//
//     let env = __ENV__;
//     let appConfig = {
//         rootPath: rootPath,
//         rootUrl: rootUrl,
//         apiPath: apiPath,
//         maxSize: 8,  // 页数多少多少翻页数
//         pageSize: 15, // 每页多少条数据
//         imgUrl: "//o96iiewkd.qnssl.com/",   // 图片地址
//         cdnUrl: "//o96iczjtp.qnssl.com/qh-admin-front/prod/",// cdn地址访问本地图片
//         api: {
//             tokenImg: apiPath + "/common/generatorToken"
//         },
//         env: env
//     };
//
//     return appConfig;
// }
//
// export default appConfigFactory;


var env = __ENV__.toUpperCase();

console.log('env------------------', env);

var baseObj = {
    app: __APP__,
    version: __VERSION__,
    imgView1: "?imageView2/1/w/500/h/200",  // 对图片进行缩放(首页)
    imgView2: "?imageView2/2/w/100/h/100",  // 对图片进行缩放(用户中心)
    imgUpload: "/common/uploadImgS",
    title: "平台"
};

/**
 * 开发用的测试环境。
 */
function dev() {

    const devPort = "14100";              //开发端口
    const apiPort = "11400";              //api端口，支付默认api端口
    /////////////////////////////////这是分割线

    let name = 'dev环境';                 //为了方便查看console。查看环境，后期可以删除
    let domain = "//kingsilk.net";
    let rootUrl = `/shop/local/${devPort}/`;
    let apiPath = domain + `/shop/rs/local/${apiPort}/api`;


    return Object.assign(baseObj, {
        name: name,
        rootUrl: rootUrl,                   // FIXME 有用到？
        apiPath: apiPath,
        maxSize: 8,                         // 页数多少多少翻页数
        pageSize: 10,                       // 每页多少条数据
    });
}


/**
 * 开发用的测试环境。
 */
function test13() {

    const devPort = "11300";              //开发端口
    const apiPort = "11300";              //api端口，支付默认api端口
    /////////////////////////////////这是分割线
    let domain = "//kingsilk.net";
    let apiPath = domain + `/shop/rs/local/${apiPort}/api`;
    let rootUrl = `/shop/local/${devPort}/`;

    let name = 'test13环境';                 //为了方便查看console。查看环境，后期可以删除

    return Object.assign(baseObj, {
        name: name,
        rootUrl: rootUrl,                   // FIXME 有用到？
        apiPath: apiPath,
        maxSize: 8,                         // 页数多少多少翻页数
        pageSize: 10,                       // 每页多少条数据
    });
}

/**
 * 开发用的测试环境。
 */
function test14() {

    const devPort = "11400";              //开发端口
    const apiPort = "11400";              //api端口，支付默认api端口
    /////////////////////////////////这是分割线

    let name = 'test14环境';                 //为了方便查看console。查看环境，后期可以删除

    let domain = "//kingsilk.net";
    let rootUrl = `/shop/local/${devPort}/`;
    let apiPath = domain + `/shop/rs/local/${apiPort}/api`;


    return Object.assign(baseObj, {
        name: name,
        rootUrl: rootUrl,                   // FIXME 有用到？
        apiPath: apiPath,
        maxSize: 8,                         // 页数多少多少翻页数
        pageSize: 10,                       // 每页多少条数据
    });
}


/**
 * 开发用的测试环境。
 */
function prod() {

    /////////////////////////////////这是分割线
    let domain = "//kingsilk.net";
    let rootUrl = `/shop/mobile/?showwxpaytitle=1#/`;
    let apiPath = domain + `/shop/rs/api`;

    let name = 'prod环境';                 //为了方便查看console。查看环境，后期可以删除

    return Object.assign(baseObj, {
        name: name,
        rootUrl: rootUrl,                   // FIXME 有用到？
        apiPath: apiPath,
        maxSize: 8,                         // 页数多少多少翻页数
        pageSize: 10,                       // 每页多少条数据
    });
}


function appConfigFactory() {

    let appConfig = null;

    if (env === "TEST13") {
        appConfig = test13();
    } else if (env === "TEST14") {
        appConfig = test14();
    } else if (env === "PROD") {
        appConfig = prod();
    } else {
        appConfig = dev();
    }

    return appConfig;
}

export default appConfigFactory;
