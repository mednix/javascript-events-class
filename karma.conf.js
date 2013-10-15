module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],

        files: [
            'tests/*.js'
        ],
        port: 5000,
        runnerPort: 9999,
        singleRun: true,
        browsers: ['PhantomJS'],
        autoWatch: true
    });
};