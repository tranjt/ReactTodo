var webpack = require("webpack");


module.exports = {
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery"
        })
    ],
    output: {
        path: __dirname, 
        filename: "./public/bundle.js"
    },
    resolve: {
        root: __dirname,
        modulesDirectories: [
            "node_modules",
            "./app/components",
            "./app/api"
        ],
        alias: {
           app: "app",
           applicationStyle: "app/styles/app.css",      
           actions: "app/actions/actions.jsx",
           reducers: "app/reducers/reducers.jsx",
           configureStore: "app/store/configureStore.jsx",        
        },        
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-3"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },

    devtool: "cheap-module-eval-source-map"
};