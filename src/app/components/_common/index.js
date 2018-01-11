import angular from "angular";
import md from "angular-material";
import uiRouter from "angular-ui-router";
// import DemoService from "./services/DemoService.js";
import DatepickerInitDirective from "./directives/DatepickerInitDirective.js";
import confMdTheming from "./confMdTheming.js";
import confUrlMatcher from "./confUrlMatcher.js";
import confUrlRouter from "./confUrlRouter.js";
import runState from "./runState";




var env = __ENV__.toUpperCase();

console.log('env------------------', env);


// if (env == 'PROD') { // eslint-disable-line no-undef
//     console.log("-------------- prod _common", uiRouter)
// } else {
//     console.log("-------------- NOT prod _common", uiRouter)
// }

if (env === "TEST13") {
    console.log("--------------TEST13")
} else if (env === "TEST14") {
    console.log("-------------- TEST14")
} else if (env === "PROD") {
    console.log("-------------- PROD")
} else {
    console.log("-------------- dev")
}


export default angular.module('app.common', [
    uiRouter,
    md
])
    // .service('demoService', DemoService)
    // .directive('my-datepicker', DatepickerInitDirective)
    .config(confMdTheming)
    .config(confUrlMatcher)
    .config(confUrlRouter)
    .run(runState);

