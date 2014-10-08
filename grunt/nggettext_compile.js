module.exports = {
    "compile": {
        "options": {
            "module": '<%= package.name %>'
        },
        "files": {
            "build/js/translations.js": "i18n/*.po"
        }
    }
};
