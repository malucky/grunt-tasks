// Angular template compilation
module.exports = {
    "build": {
        "options": {
            "base": "src",
            "module": "<%= package.name %>.templates"
        },
        "src": "src/**/*.tpl.html",
        "dest": "build/js/templates.js"
    }
};
