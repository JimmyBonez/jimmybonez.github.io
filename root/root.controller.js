(functon () {
    angular
        .module('root')
        .config(['$routeProvider', RootRouter]);

    RootRouter.$inject = ['$routeProvider'];

    function RootRouter($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'root/root.index.html',
                controller: 'Root',
                controllerAs: 'vm'
            }).when('/code', {
                templateUrl: 'code.html',
                controller: '',
                controllerAs: 'vm'
        }).when('/talk', {
            templateUrl: 'talk.html',
            controller: '',
            contrllerAs: 'vm'
        }).otherwise({
            redirectTo: '/'
        });
    }
})();