import controller from "./controller.js";
import html from "!html-loader?minimize=true!./index.main.html";

function confState($stateProvider) {
    console.log("--------main.firstDemo : confState");
    $stateProvider.state("main.pullAdd", {
        url: "/pullAdd",
        sticky: true,
        deepStateRedirect: true,
        views: {
            "pullAdd@main": {
                template: html,
                controller: controller
            }
        }
    });
}
confState.$inject = ['$stateProvider'];

export default confState ;
