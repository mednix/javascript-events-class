module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            clean: ['docs'],
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
                    browsers: ["Firefox"]
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
// Default task(s).
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('build', ['clean', 'uglify', 'jsdoc']);
    grunt.registerTask('test', [ 'jshint', 'karma:continuous']);

}
;