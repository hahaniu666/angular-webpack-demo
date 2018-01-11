import angular from "angular";
import html from "!html-loader?minimize=true!./view.html";

alertServiceFactory.$inject = ['$q', '$interval', '$mdDialog'];

function alertServiceFactory($q, $interval, $mdDialog) {
    function msgAlert(status, msg) {
        //创建一个等待的意思 先后顺序
        var deferred = $q.defer();
        //
        var intervalStop = undefined;
        $mdDialog.show({
            template: html,
            // parent: angular.element(document.body).find('#qh-shop-wap-front'),
            controllerAs: "vm",
            clickOutsideToClose: false,
            hasBackdrop: false,
            fullscreen: false,
            controller: ['$scope', '$mdDialog', '$rootScope', "$interval", function ($scope, $mdDialog, $rootScope, $interval) {
                var vm = this;
                vm.status = status;
                vm.msg = msg;
                vm.cancel = function () {
                    $mdDialog.cancel();
                };
                var i = 1;
                intervalStop = $interval(function () {
                    if (i <= 0) {
                        vm.cancel();
                        $interval.cancel(intervalStop);//解除计时器
                        intervalStop = undefined;
                    }
                    i--;
                }, 1000);
            }],
        }).then(function () {
            deferred.resolve(true);//这就是等待的结果
        }, function () {
            deferred.resolve(true);//这就是等待的结果
        });
        return deferred.promise;
    }


    return {
        msgAlert: msgAlert,
        isUpdateApp: true,
        pages: {item: 0}
    };
}


export default alertServiceFactory;



