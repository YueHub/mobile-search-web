const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        "js": "./src/js/main.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name]/bundle.js",
    },    
    devtool: "inline-source-map", // debug 
    devServer: {
        contentBase: path.join(__dirname, "dist"),
    },
    externals: {
        'jquery': 'window.jQuery',
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HtmlWebpackPlugin({
            title: "Output Management",
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
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            }
        ]
    }

}
