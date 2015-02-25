'use strict';

angular.module('publishingSystem')
    .controller('MainCtrl', ['$scope',
        function($scope) {
            $scope.awesomeThings = [];
            $scope.formInfo = {};

            $scope.sendData = function() {
                $scope.titleRequired = '';
                $scope.descriptionRequired = '';
                $scope.imageRequired = '';

                if (!$scope.formInfo.title) {
                    $scope.titleRequired = 'Title is required';
                }

                if (!$scope.formInfo.description) {
                    $scope.descriptionRequired = 'Description is required';
                }

                if (!$scope.formInfo.imageUrl) {
                    $scope.imageRequired = 'Image is required';
                }
            };

            angular.forEach($scope.awesomeThings, function(awesomeThing) {
                awesomeThing.rank = Math.random();
            });
        }
    ]);
