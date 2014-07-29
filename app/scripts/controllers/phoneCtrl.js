/**
 * Created by ethan on 2014/7/27.
 */

angular.module('yoGenAngularApp', [])
    .controller('PhoneListCtrl', function ($scope,$http) {
//        $scope.phones = [
//            {'name': 'Nexus S',
//                'snippet': 'Fast just got faster with Nexus S.',
//                'age': 1},
//            {'name': 'Motorola XOOM™ with Wi-Fi',
//                'snippet': 'The Next, Next Generation tablet.',
//                'age': 2},
//            {'name': 'MOTOROLA XOOM™',
//                'snippet': 'The Next, Next Generation tablet.',
//                'age': 3}
//        ];
        $http.get('phones/phones.json')
            .success(function(data) {
                $scope.phones= data.slice(0,5);
            });
        $scope.sortProp = 'age';
    });