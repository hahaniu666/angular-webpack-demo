import controller from "./controller.js";
import html from "!html-loader?minimize=true!./index.main.html";

function confState($stateProvider) {
    console.log("--------main.ddd : confState");
    $stateProvider.state("main.ddd", {
        url: "/ddd",
        sticky: true,
        deepStateRedirect: true,
        views: {
            "ddd@main": {
                template: html,
                controller: controller
            }
        }
    });
}
confState.$inject = ['$stateProvider'];

export default confState ;
