module.exports = function(grunt) {
    return {
        options: {
            keepAlive: false,
            configFile: "grunt/protractor.conf.js"
        },
        e2e: {
            options: {
                args: {
                    specs: ['src/app/**/*.scenario.js'],
                    seleniumServerJar: '<%= seleniumServerJar %>',
                    chromeDriver: '<%= chromeDriver %>',
                    baseUrl: grunt.option('storeUrl'),
                    params: {
                        loginUrl: grunt.option('loginUrl') || 'https://login-dev.bigcommerceapp.com',
                        email: grunt.option('email'),
                        password: grunt.option('password')
                    }
                }
            }
        }
    }
};
