const path = require("path");

module.exports = {
    entry: {
        angular: "./node_modules/angular/angular.min",
        lodash: "./node_modules/lodash/lodash.min",
        restangular: "./node_modules/restangular/dist/restangular.min",
        applicationEntry: "./webpack-config/app-entry.js",
        assetsDeps: "./webpack-config/assets-deps.js",
        customAssets: "./webpack-config/custom-assets.js"
    },
    output: {
        path: path.resolve(__dirname + "/wwwroot", "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}