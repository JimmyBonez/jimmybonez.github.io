(function() {
    angular
        .module('root')
        .directive('appRoot',AppRoot);

    function AppRoot() {
        var directive = {
            restrict: 'EA',
            transclude: true,
            templateUrl: 'root/root.directive.html',
            controller: 'Root',
            controllerAs: 'vm',
            bindToController: true
        };
        return directive;
    }
})();