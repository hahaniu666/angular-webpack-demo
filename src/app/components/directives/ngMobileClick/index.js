import angular from "angular";
import directiveFactory  from "./directiveFactory";

export default angular.module('app.directives.ngMobileClick', [])
    .directive('ngMobileClick', directiveFactory);
