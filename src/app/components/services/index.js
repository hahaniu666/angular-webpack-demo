// import conf from "../conf";
import angular from "angular";

import alertService from "./alertService";

export default angular.module('app.services', [
    alertService.name,
]);
