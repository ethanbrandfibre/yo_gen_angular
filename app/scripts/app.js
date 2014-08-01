'use strict';

/**
 * @ngdoc overview
 * @name yoGenAngularApp
 * @description
 * # yoGenAngularApp
 *
 * Main module of the application.
 */
angular
  .module('yoGenAngularApp', ['phonecatFilters',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/phones', {
        templateUrl: 'components/phone-list.html',
        controller: 'PhoneListCtrl'
      })
      .when('/phones/:phoneId', {
        templateUrl: 'components/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: '/phones'
      });
  });