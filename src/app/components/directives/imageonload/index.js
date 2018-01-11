import angular from "angular";
import directiveFactory  from "./directiveFactory";

export default angular.module('app.directives.imageonload', [])
    .directive('imageonload', directiveFactory);


