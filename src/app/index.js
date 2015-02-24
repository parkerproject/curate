'use strict';

angular.module('publishingSystem', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });