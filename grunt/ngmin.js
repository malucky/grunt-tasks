/**
 * AngularJS Pre-minifier
 * This package automatically extracts module definitions to ensure dependencies are not lost by uglify.
 */
module.exports = {
    "deploy": {
        expand: true,
        cwd: 'build/js',
        src: ['**/*.js'],
        dest: 'build/js'
    }
};
