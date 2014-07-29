/**
 * Created by ethan on 2014/7/27.
 */
describe('Phone Contrller Test',function() {

    beforeEach(module('yoGenAngularApp'));

    var scope, phoneCtrl, httpBackend;

    beforeEach(inject(function($rootScope,$controller,$httpBackend) {

        httpBackend = $httpBackend;
        httpBackend.expectGET('phones/phones.json').respond([{name:'Nexus S'},{name:'Moto'}]);


        scope = $rootScope.$new();
        phoneCtrl = $controller('PhoneListCtrl',{
            $scope: scope
        });
    }));

    it('phone list length test',function() {
        expect(scope.phones).toBe(undefined);
        httpBackend.flush();
        expect(scope.phones.length).toBe(2);
    });
});