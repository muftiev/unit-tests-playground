'use strict';

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['PhantomJS'],
        client: {
            mocha: {ui: 'bdd'}
        },
        colors: true,
        logLevel: config.LOG_INFO,
        files: [
            'src/**/*.js',
            'test/*.js'
        ],
        exclude: [],
        frameworks: [
            'mocha',
            'chai-sinon'
        ],
        plugins: [
            'karma-chai-sinon',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-phantomjs-launcher',
            'karma-coverage'
        ],
        preprocessors: {
            'src/**/*.js': 'coverage'
        },
        port: 9876,
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            reporters: [
                {'type': 'text'},
                {'type': 'html', dir: 'coverage'}
            ]
        },
        phantomjsLauncher: {
            exitOnResourceError: true
        },
        singleRun: true
    });
};
