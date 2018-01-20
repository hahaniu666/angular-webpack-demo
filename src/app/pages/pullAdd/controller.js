function controller($scope, $state, alertService) {
    if (typeof jQuery == 'undefined') {
        window.alert("没有jquery");
    }

    // $(".abc").css({background: red})
    $(".abc").css({ "color": "#ff0011", "background": "blue" });
}

controller.$inject = ['$scope', '$state', 'alertService'];

export default controller;
