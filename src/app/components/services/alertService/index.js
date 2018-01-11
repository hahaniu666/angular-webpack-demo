// import conf from "../../conf";
import angular from "angular";
import alertServiceFactory from "./alertServiceFactory";
import "./css.scss";


export default angular.module('app.services.alertService', [])
    .factory('alertService', alertServiceFactory);
