module.exports = {
    "extract": {
        "files": {
            "i18n/<%= package.name %>.pot": [
                "src/app/**/*.{js,tpl.html}", "!src/app/**/*.{spec.js,scenario.js}"
            ]
        }
    }
};
