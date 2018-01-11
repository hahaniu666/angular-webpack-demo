function controller($scope, $state, alertService) {
    $scope.go = function (state) {
        console.log("--------------" + state);
        $state.go(state);
    };
    $scope.count = 5555555555;
    alertService.msgAlert("exclamation-circle", "版本过低请升级");
}

controller.$inject = ['$scope', '$state', 'alertService'];

export default controller;
