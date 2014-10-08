module.exports = function(grunt) {
    return {
        "options": {
            "livereload": {
                key: grunt.file.read('grunt/certs/server.key'),
                cert: grunt.file.read('grunt/certs/server.crt')
            }
        },
        "js_files": {
            "files": ["src/**/*.{js,tpl.html}"],
            "tasks": [
                "jshint:all", // Make sure the JS files are lint free
                "clean:build_js", // Remove any JS files in the build folder
                "copy:build_js",
                "html2js:build", // Build Templates
                "i18n-compile",
                "karma:watch:run",
                "clean:transclude",
                "copy:transclude"
            ]
        },
        "sass_files": {
            "options": {
                // Do not have Livereload watch these files as the
                // css_changes below will be used instead.
                "livereload": false
            },
            "files": ["src/sass/**/*.{scss,sass}"],
            "tasks": [
                "sass:build",
                "clean:transclude",
                "copy:transclude"
            ]
        },
        // We watch the final css file in the build folder so livereload properly
        // refreshes the CSS without refreshing the whole page.
        "css_changes": {
            "files": ["build/css/<%= package.name %>.css"],
            "tasks": []
        },
        static_files: {
            "files": ["src/static/**/*"],
            "tasks": [
                "build", // These don't change much, so just run the whole build process
                "clean:transclude",
                "copy:transclude"
            ]
        }
    };
};
