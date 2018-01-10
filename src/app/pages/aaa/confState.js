import controller from "./controller.js";
import html from "!html-loader?minimize=true!./index.main.html";

function confState($stateProvider) {
    console.log("--------main.aaa : confState")
    $stateProvider.state("main.aaa", {
        url: "/aaa",
        sticky: true,
        deepStateRedirect: true,
        views: {
            "aaa@main": {
                template: html,
                controller: controller
            }
        }
    });
}
confState.$inject = ['$stateProvider'];

export default confState ;
