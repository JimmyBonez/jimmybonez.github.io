(function () {
    angular
        .module('root')
        .controller('Root', Root);

    Root.$inject = ['$scope', '$http'];
    function Root($scope,$http) {
        var vm = this;
        vm.name = "Jimmy";
        vm.copyMax = copyMax;

        function copyMax(name) {
            vm.name = name;
        }
    }
})();