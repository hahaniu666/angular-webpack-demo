// function controller($scope, $state) {
//     $scope.go = function (state) {
//         console.log("--------------" + state);
//         $state.go(state);
//     };
//     $scope.count = 300;
// }
// controller.$inject = ['$scope', '$state'];
//
// export default controller ;
//


//

var $scope,
    conf,
    $state;

class controller {
    constructor(_$scope,
                _conf,
                _$state,
                ) {
        $scope = _$scope;
        $state = _$state;

        conf=_conf;


        $scope.go = function (state) {
            console.log("--------------" + state);
            $state.go(state);
        };
        $scope.count = 300;


        console.log('conf',conf);


    }
}

controller.$inject = [
    '$scope',
    'conf',
    '$state',
];

export default controller;
