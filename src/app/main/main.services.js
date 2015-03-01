'use strict';
angular.module('publishingSystem')
    .factory('curateServices', function($http) {
        var searchUrl = 'http://api.dealsbox.co/deals/search';
        var runRequest = function(options) {
            searchUrl = searchUrl + '?q=' + options.keyword + '&city=' + options.city;
            if (options.price) {
                searchUrl = searchUrl + '&price=' + options.price;
            }
            return $http({
                url: searchUrl
            });
        }
    });