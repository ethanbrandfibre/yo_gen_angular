/**
 * Created by ethan on 2014/7/30.
 */
describe('protractor tutorial',function() {

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title',function() {
        expect(browser.getTitle()).toEqual('Super Calculator');
    })
})