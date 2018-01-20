import angular from "angular";
import uiRouter from "angular-ui-router";
import confState from "./confState.js";
import "./css.scss"

import "muicss/dist/css/mui.css"
import "muicss/dist/angular/mui-angular"

export default angular.module('main.pullAdd', [
    uiRouter
]).config(confState);

