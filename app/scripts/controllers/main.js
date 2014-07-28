'use strict';

/**
 * @ngdoc function
 * @name yoGenAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoGenAngularApp
 */
angular.module('yoGenAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
