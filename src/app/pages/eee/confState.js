import controller from "./controller.js";
import html from "!html-loader?minimize=true!./index.main.html";

function confState($stateProvider) {
    console.log("--------main.eee : confState");
    $stateProvider.state("main.eee", {
        url: "/eee",
        sticky: true,
        deepStateRedirect: true,
        views: {
            "eee@main": {
                template: html,
                controller: controller
            }
        }
    });
}
confState.$inject = ['$stateProvider'];

export default confState ;
