'use strict';
angular.module('publishingSystem')
    .factory('curateServices', function($http) {
        var runRequest = function(options) {
            var searchUrl = 'http://api.dealsbox.co/deals/search';
            searchUrl = searchUrl + '?q=' + options.keyword + '&city=' + options.city;
            if (options.price) {
                searchUrl = searchUrl + '&price=' + options.price;
            }
            return $http({
                method: 'GET',
                url: searchUrl
            });
        }
        return {
            events: function(options) {
                return runRequest(options);
            }
        }
    });