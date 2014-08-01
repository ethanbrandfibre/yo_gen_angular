/**
 * Created by ethan on 2014/7/30.
 */
angular.module('phonecatFilters',[])
.filter('checkmark',function() {
        return function(input) {
            return input ? '\u2713':'\u2718';
        };
    })