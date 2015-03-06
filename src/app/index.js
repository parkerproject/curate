'use strict';

angular.module('publishingSystem', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngRoute', 'angular-wurfl-image-tailor'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/curate', {
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });