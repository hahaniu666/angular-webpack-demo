function controller($scope, $state) {
    $scope.str = "a1";

    console.log($state.params.id);

}
controller.$inject = ['$scope', '$state'];

export default controller ;
