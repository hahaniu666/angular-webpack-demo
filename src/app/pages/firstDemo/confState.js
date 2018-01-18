import controller from "./controller.js";
import html from "!html-loader?minimize=true!./index.main.html";

function confState($stateProvider) {
    console.log("--------main.firstDemo : confState");
    $stateProvider.state("main.firstDemo", {
        url: "/firstDemo",
        sticky: true,
        deepStateRedirect: true,
        views: {
            "firstDemo@main": {
                template: html,
                controller: controller
            }
        }
    });
}
confState.$inject = ['$stateProvider'];

export default confState ;
