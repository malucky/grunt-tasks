// An example configuration file.
exports.config = {
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
    rootElement: 'div',
    allScriptsTimeout: 20000,
    onPrepare: function() {
        browser.driver.get(browser.params.loginUrl);

        browser.driver.findElement(by.id('user_email')).sendKeys(browser.params.email);
        browser.driver.findElement(by.id('user_password')).sendKeys(browser.params.password);
        browser.driver.findElement(by.className('login-form-button')).click();
    },

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
