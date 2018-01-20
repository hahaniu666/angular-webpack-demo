function controller($scope, $state, alertService) {
    $scope.leftOpen = false;
    $scope.openLeftMenu = function () {
        //$mdSidenav('left').toggle();
        $scope.leftOpen = !$scope.leftOpen;
    };


    $scope.consoleLog = function () {
        console.log('sideNav');
    }

}

controller.$inject = ['$scope', '$state', 'alertService'];

export default controller;
