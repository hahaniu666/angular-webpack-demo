import angular from "angular";
import number_format from "./number_format";


function numFactory() {
    return number_format;
};

export default angular.module('app.filters.num', [])
    .filter('num', numFactory);

