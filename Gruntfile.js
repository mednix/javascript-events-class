module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            clean: {
                docs: ['docs'],
                coverage: ['coverage']
            },
            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
                },
                build: {
                    src: 'src/*.js',
                    dest: 'build/<%= pkg.name %>.min.js'
                }
            },
            connect: {
                default: {
                    options: {
                        livereload: true,
                        port: 8080,
                        open: "127.0.0.1:" + this.port + "/src/index.html"
                    }
                }
            },
            watch: {
                scripts: {
                    files: ['src/*.*', 'tests/*.*'],
                    tasks: ['build'],
                    options: {
                        livereload: true,
                        spawn: false
                    }
                }
            },
            jsdoc: {
                dist: {
                    src: ['src/*.js', 'tests/*.js'],
                    options: {
                        destination: 'docs'
                    }
                }
            },
            jshint: {
                all: ["src/*.js", "tests/*.js"]
            },
            karma: {
                options: {
                    configFile: 'karma.conf.js'
                },
                continuous: {
                    browsers: ["Firefox"],
                    singleRun: true,
                    reporters: ['dots', 'coverage'],
                    coverageReporter: {
                        type: "lcov",
                        dir: "coverage/"
                    }
                },
                dev: {
                    singleRun: true
                }
            },

            coveralls: {
                options: {
                    coverage_dir: 'coverage'
                }
            }
        }
    );
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-karma-coveralls');
// Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('build', ['clean:docs', 'uglify', 'jsdoc']);
    grunt.registerTask('test:continuous', ['jshint', 'karma:continuous']);
    grunt.registerTask('test:dev', ['clean:coverage', 'jshint', 'karma:dev']);

}
;