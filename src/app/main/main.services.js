'use strict';
angular.module('publishingSystem')
    .factory('curateServices', function($http) {
        var runRequest = function(options) {
            var searchUrl = 'http://api.dealsbox.co/deals/search';
            searchUrl = searchUrl + '?limit=10&q=' + options.keyword + '&city=' + options.city;
            console.log(searchUrl);
            if (options.SelectPrice) {
                searchUrl = searchUrl + '&price=' + options.SelectPrice;
            }

            if (options.category) {
                searchUrl = searchUrl + '&category=' + encodeURIComponent(options.category);
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