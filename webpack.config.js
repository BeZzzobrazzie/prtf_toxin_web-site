const path = require("path");
//const HtmlWebpackPlugin = require("html-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PugPlugin = require("pug-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production"
};

console.log(mode + " mode")

module.exports = { 
    mode: mode,
    output: {
        path: path.join(__dirname, "dist/"),
        publicPath: "/",
        filename: "[name][contenthash].js",
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true,
    },
    entry: {
        index: "./src/pug/pages/index.pug",
        "colors-and-fonts": "./src/pug/pages/colors-and-fonts.pug",
        "fields-and-buttons": "./src/pug/pages/fields-and-buttons.pug",
    },
    devtool: "source-map",
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      watchFiles: {
        paths: ['src/**/*.*'], 
        options: {
          usePolling: true,
        },
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          scripts: {
            test: /\\.(js|ts)$/,
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
        //new MiniCssExtractPlugin({
        //    filename: "[name].[contenthash].css"
        //}),
        //new HtmlWebpackPlugin( {
        //    template: "./src/index.pug"
        //}),
        new PugPlugin({
            pretty: true,
            modules: [
                PugPlugin.extractCss({
                    filename: "[name].[contenthash].css"
                })
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    //(mode === "development") ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Option
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.pug$/,
                loader: PugPlugin.loader,
                options: {
                    method: "render",
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
        ]
    },
}