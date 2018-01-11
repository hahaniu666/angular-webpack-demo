import angular from "angular";
import directiveFactory  from "./directiveFactory";
import "./css.scss";

export default angular.module('app.directives.ksFooterMenu', [])
    .directive('ksFooterMenu', directiveFactory);
