var baseFiles = ['<%= karmaVendors %>'];

module.exports = {
    // Test fully built app
    "deploy": {
        "options": {
            "files": baseFiles.concat([
                "src/app/**/*.spec.js",
                "dist/js/<%= package.name %>.min.js"
            ])
        }
    },
    // Once off test of build files
    "once": {
        "options": {
            "files": baseFiles.concat([
                "src/app/**/*.spec.js",
                "build/js/**/*.js"
            ])
        }
    },
    // Used during watch. It just sets up the server and then watch calls 'karma:watch:run' to fire off tests.
    "watch": {
        "options": {
            "singleRun": false,
            "background": true,
            "port": 9118,
            "runnerPort": 9200,
            "files": baseFiles.concat([
                "src/app/**/*.spec.js",
                "build/js/**/*.js"
            ])
        }
    },
    // Generate coverage report of unit tests
    "coverage": {
        "options": {
            "files": baseFiles.concat([
                "src/app/**/*.spec.js",
                "build/js/**/*.js"
            ]),
            "preprocessors": {
                "build/js/**/*.js": ["coverage"]
            },
            "reporters": [
                "coverage",
                "dots"
            ],
            "coverageReporter": {
                "type": "lcov",
                "dir": "coverage"
            }
        }
    },
    "options": {
        "frameworks": [
            "jasmine"
        ],
        "plugins": [
            "karma-jasmine",
            "karma-firefox-launcher",
            "karma-chrome-launcher",
            "karma-phantomjs-launcher",
            "karma-coffee-preprocessor",
            "karma-coverage"
        ],
        "reporters": "dots",
        "port": 9018,
        "runnerPort": 9100,
        "singleRun": true,
        "background": false,
        "urlRoot": "/",
        "autoWatch": false,
        "logLevel": "ERROR",
        "browsers": [
            "PhantomJS"
        ]
    }
};
