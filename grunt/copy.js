module.exports = function(grunt) {
    return {
        "build_js": {
            "files": [
                {
                    "expand": true,
                    "cwd": "src/app",
                    "src": ["**/*.js", "!**/*.{spec.js,scenario.js}"],
                    "dest": "build/js"
                }
            ]
        },
        "build_static": {
            "files": [
                {
                    "expand": true,
                    "cwd": "src/static",
                    "src": "**",
                    "dest": "build"
                }
            ]
        },
        "deploy": {
            "files": [
                {
                    "expand": true,
                    "cwd": "build",
                    "src": "**/*/<%= package.name %>.min.*",
                    "dest": "dist"
                },
                {
                    "expand": true,
                    "cwd": "src/static",
                    "src": "**",
                    "dest": "dist"
                }
            ],
            "options": {
                "noProcess": ['**/*.{jpg,jpeg,png,gif,eot,svg,ttf,woff}'],
                "process": function (content) {
                    var config = grunt.config.get();
                    config.assetPath = '<%= prodAssetPath %>';

                    return grunt.template.process(content, {data: config});
                }
            }
        },
        "transclude": {
            "files": [
                {
                    "expand": true,
                    "cwd": "build",
                    "src": ["**/*"],
                    "dest": "<%= bcAppDirectory %>/vendor/bower_components/<%= package.name %>/build"
                }
            ],
            "options": {
                "noProcess": ['**/*.{jpg,jpeg,png,gif,eot,svg,ttf,woff}'],
                "process": function (content) {
                    var config = grunt.config.get();
                    config.assetPath = '<%= devAssetPath %>';

                    return grunt.template.process(content, {data: config});
                }
            }
        }
    };
};
