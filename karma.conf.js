module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],

        files: [
            'src/*.js',
            'tests/*.js'
        ],
        port: 5000,
        runnerPort: 9999,
        singleRun: false,
        browsers: ['PhantomJS']
    });
};