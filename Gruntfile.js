module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            sass: {
                files: ['styles/sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        },
        sass: {
            dist: {
                files: {
                    'styles/main.css': 'styles/sass/main.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'styles/',
                    src: ['main.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('minify', ['sass', 'cssmin']);
};
