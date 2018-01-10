import controller from "./controller.js";
import html from "!html-loader?minimize=true!./index.main.html";

function confState($stateProvider) {
    console.log("--------main.bbb : confState");
    $stateProvider.state("main.bbb", {
        url: "/bbb",
        sticky: true,
        deepStateRedirect: true,
        views: {
            "bbb@main": {
                template: html,
                controller: controller
            }
        }
    });
}
confState.$inject = ['$stateProvider'];

export default confState ;
