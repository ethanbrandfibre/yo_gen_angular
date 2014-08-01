/**
 * Created by ethan on 2014/7/27.
 */

angular.module('yoGenAngularApp')
    .controller('PhoneListCtrl', function ($scope,$http) {
        $http.get('phones/phones.json')
            .success(function(data) {
                $scope.phones= data;
            });
        $scope.sortProp = 'age';
    })
    .controller('PhoneDetailCtrl',function($scope,$routeParams,$http) {

        $scope.phoneId = $routeParams.phoneId;

        $http.get('phones/'+$routeParams.phoneId+'.json').success(function(data) {
            $scope.phone = data;
        })
    });