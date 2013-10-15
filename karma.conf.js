module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],

        files: [
            'node_modules/chai/chai.js',
            'src/*.js',
            'tests/*.js'
        ],
        preprocessors: {
            'src/*.js': 'coverage'
        },
        port: 5000,
        runnerPort: 9999,
        singleRun: false,
        browsers: ['PhantomJS'],
        reporters: ['dots', 'coverage'],
        plugins: [
            'karma-coverage',
        ]
    });
};