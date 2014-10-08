module.exports = {
    "options": {
        "report": false,
        "sourceMap": true,
        "sourceMapIncludeSources": true
    },
    "deploy": {
        "files": {
            "build/js/<%= package.name %>.min.js": ["build/js/**/*.js"]
        }
    }
};
