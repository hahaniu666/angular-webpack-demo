import angular from "angular";
import uiRouter from "angular-ui-router";
import confState from "./confState.js";
import "./css.scss"
export default angular.module('main.eee', [
    uiRouter
])
    .config(confState);

