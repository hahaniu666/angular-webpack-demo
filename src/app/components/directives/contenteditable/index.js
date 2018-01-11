import angular from "angular";
import directiveFactory  from "./directiveFactory";

export default angular.module('app.directives.contenteditable', [])
    .directive('contenteditable', directiveFactory);


