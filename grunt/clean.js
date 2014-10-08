// Clean generated asset files
module.exports = {
    "dist": ["dist"],
    "coverage": ["coverage"],
    "build": ["build"],
    "build_js": ["build/js"],
    "build_css": ["build/css/<%= package.name %>.css"],
    "transclude": {
        "options": {
            // Since it's outside the CWD, we need to force the delete
            "force": true
        },
        "src": ["<%= bcAppDirectory %>/vendor/bower_components/<%= package.name %>/build"]
    }
};
