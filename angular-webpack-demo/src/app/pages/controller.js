function controller($scope, $state) {
    $scope.go = function (state) {
        console.log("-------------123-" + state);
        $state.go(state);
    };


    $scope.goAAA = function () {
        $state.go('main.aaa', {}, {reload: true});
    }

}
controller.$inject = ['$scope', '$state'];

export default controller ;
