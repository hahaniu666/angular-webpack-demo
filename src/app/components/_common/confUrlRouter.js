function confUrlRouter($urlRouterProvider) {
    $urlRouterProvider.otherwise('/aaa');
}
confUrlRouter.$inject = ['$urlRouterProvider'];

export default confUrlRouter;
