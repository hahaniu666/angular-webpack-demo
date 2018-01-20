import controller from "./controller.js";
import html from "!html-loader?minimize=true!./index.main.html";

function confState($stateProvider) {
    console.log("--------main.sideNav : confState");
    $stateProvider.state("main.sideNav", {
        url: "/sideNav",
        sticky: true,
        deepStateRedirect: true,
        views: {
            "sideNav@main": {
                template: html,
                controller: controller
            }
        }
    });
}

confState.$inject = ['$stateProvider'];

export default confState;
