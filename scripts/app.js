(function () {
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
        'ngRoute',
		'ngResource',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/main/main.html' ,
                controller: 'MainController',
                controllerAs: 'mainController'
            });
            $routeProvider.otherwise({ redirectTo: '/' });
        }
    ]);
})();
