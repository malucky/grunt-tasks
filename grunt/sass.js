// Build SASS assets
module.exports = {
    "options": {
        "bundleExec": true
    },
    "build": {
        "files": {
            "build/css/<%= package.name %>.css": "src/sass/application.scss"
        }
    }
};
