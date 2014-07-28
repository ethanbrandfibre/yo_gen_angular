/**
 * Created by ethan on 2014/7/27.
 */
describe('Phone Contrller Test',function() {

    beforeEach(module('yoGenAngularApp'));

    var scope, phoneCtrl;

    beforeEach(inject(function($rootScope,$controller) {
        scope = $rootScope.$new();
        phoneCtrl = $controller('PhoneListCtrl',{
            $scope: scope
        });
    }));

    it('phone list lenght test',function() {
        expect(scope.phones.length).toBe(3);
    });
});