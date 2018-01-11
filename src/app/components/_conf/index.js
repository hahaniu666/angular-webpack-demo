import angular from "angular";
import appConfigFactory from "./appConfigFactory.js";
// import alertServiceFactory from "../services/alertService/alertServiceFactory";


console.log('appConfigFactory',appConfigFactory);
/**
 * 该模块根据打包时的命令行参数提供不同的 配置数据。
 */
export default angular.module('app.conf', [])
    .factory('conf',appConfigFactory);   //配置成服务，然后在js文件中注入一下，类似于$scope

// export default angular.module('app.services.alertService', [])
//     .factory('alertService', alertServiceFactory);
