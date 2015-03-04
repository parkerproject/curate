'use strict';

angular.module('publishingSystem')
    .controller('MainCtrl', ['$scope', 'curateServices',
        function($scope, curateServices) {
            $scope.awesomeThings = [];
            $scope.formInfo = {};

            $scope.sendData = function() {
                $scope.titleRequired = '';
                $scope.descriptionRequired = '';
                $scope.imageRequired = '';
                $scope.cityRequired = '';
                $scope.keywordRequired = '';
                $scope.categoryRequired = '';

                if (!$scope.formInfo.title) {
                    $scope.titleRequired = 'Title is required';
                }

                if (!$scope.formInfo.description) {
                    $scope.descriptionRequired = 'Description is required';
                }

                if (!$scope.formInfo.imageUrl) {
                    $scope.imageRequired = 'Image is required';
                }

                if (!$scope.formInfo.city) {
                    $scope.cityRequired = 'City is required';
                }

                if (!$scope.formInfo.keyword) {
                    $scope.keywordRequired = 'Keyword is required';
                }

                curateServices.events($scope.formInfo)
                    .success(function(data, success, headers) {
                        $scope.deals = data;
                    });

            };



            // angular.forEach($scope.awesomeThings, function(awesomeThing) {
            //     awesomeThing.rank = Math.random();
            // });
        }
    ]);