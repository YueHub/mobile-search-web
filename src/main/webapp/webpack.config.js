const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        "main": "./src/js/main.js",
        "libs": ["./src/js/libs/jquery.page.js", "./src/js/libs/tagcanvas.min.js"],
        "model-select": ["./src/js/model-select/fancy-select.js"]
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "js/[name]/bundle.js",
    },    
    devtool: "inline-source-map", // debug 
    devServer: {
        contentBase: path.join(__dirname, "./dist"),
    },
    externals: {
        'jquery': 'window.jQuery',
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "燕云搜索",
            template: "./src/mobile_index.html",
            filename: "mobile_index.html",
            showErrors: true,
            inject: 'body',
        }),
        new HtmlWebpackPlugin({
            title: "燕云搜索",
            template: "./src/mobile_result.html",
            filename: "mobile_result.html",
            showErrors: true,
            inject: "body"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: "babel-loader",
                    options: {presets: ["es2015"]}
                }],
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }

}
