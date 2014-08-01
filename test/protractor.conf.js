exports.config={
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [//'e2e/*.js',
        'protractorTutorial/*.js'],
    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    baseUrl: 'http://localhost:9001' //default test port with Yeoman
}