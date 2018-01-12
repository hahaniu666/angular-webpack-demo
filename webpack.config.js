var pkg = require("./package.json");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
// var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var getStateEntries = require("./webpack.getStateEntries");
var GenFutureStates = require("./webpack.GenFutureStates");

var args = require('yargs').argv;
var path = require('path');

// parameters
var env = args.env && args.env.env ? args.env.env.toUpperCase() : "DEV";
var isProd = "PROD" == env;
var outputPath = args.env && args.env.out ? args.env.out : "build";

console.log("-------:", args.env);

// parameters
var isProd = args.env && args.env.prod;

var base = __dirname;

var appName = 'app';


var vendorCssPlugin = new ExtractTextPlugin({
    filename: isProd ? '[name].[hash].css' : '[name].css'
});
var appCssPlugin = new ExtractTextPlugin({
    filename: isProd ? '[name].[hash].scss.css' : '[name].scss.css'
});


const entry = {
    "index": [
        "./src/app/index.js"
    ],
    // "main":{
    //     "./src/app/pages/main",
    // },
    // "main.aaa":{
    //     "./src/app/pages/main/aaa"
    // }
};
Object.assign(entry, getStateEntries());

const plugins = [
    new GenFutureStates({
        "htmlDir": "../" // 相对于 output.path
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: 'report.html',
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: 'report.json',
    }),
    new BellOnBundlerErrorPlugin(),
    new webpack.BannerPlugin("copyright @ kingsilk.net"),
    // new webpack.ProvidePlugin({
    //     $: "jquery",
    //     jQuery: "jquery",
    //     "window.jQuery": "jquery"
    // }),
    /* new ChunkManifestPlugin({
     filename: "manifest.json",
     manifestVariable: "webpackManifest"
     }),*/
    new webpack.optimize.CommonsChunkPlugin({
        name: "commons",
        minChunks: 2
        //filename: isProd ? 'commons.[hash].js' : 'commons.js',
        //minChunks: 3,
        // children: true,
        // async: true,
    }),
    // new webpack.DefinePlugin({
    //     __PROD__: isProd,
    //     __MOCK__: isMock
    // }),
    new webpack.DefinePlugin({
        __PROD__: isProd,
        __ENV__: JSON.stringify(env),
        __APP__: JSON.stringify(pkg.name),
        __VERSION__: JSON.stringify(pkg.version)
    }),
    vendorCssPlugin,
    appCssPlugin,
    new HtmlWebpackPlugin({
        template: './src/app/index.html',
        filename: '../index.html',
        chunks: ['commons', 'index'],
        favicon: 'favicon.ico',
        appName: appName,
        hash: !isProd,
        minify: {
            html5: true,
            removeComments: true,
            collapseWhitespace: true,
            preserveLineBreaks: true,
            minifyCSS: true
        }
    }),

    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
        disable: !isProd,
        pngquant: {
            quality: '95-100'
        }
    }),


    new webpack.HotModuleReplacementPlugin()
];

if (isProd) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            },
            output: {
                comments: false
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
    );
}

// plugins.push(
//     new OfflinePlugin()
// );


const config = {
    target: "web",
    resolve: {
        modules: [
            'node_modules',
            'bower_components',
        ]
    },
    entry: entry,
    output: {
        path: path.resolve(base, `${outputPath}/${pkg.name}`),
        filename: isProd ? '[name].[chunkhash].js' : '[name].js',
        chunkFilename: isProd ? '[name].[chunkhash].chunk.js' : '[name].chunk.js',
        crossOriginLoading: "anonymous",
        sourceMapFilename: isProd ? "[id].[hash].[file].map" : '[file].map',
        publicPath: `${pkg.name}/`

        // publicPath: `./${pkg.name}/`
    },
    module: {
        rules: [
            // {
            //     test: /src\/app\/pages\/.*\.html$/,
            //     use: [
            //         {
            //             loader: 'ngtemplate-loader',
            //             options: {
            //                 relativeTo: path.resolve(base, './src/app')
            //             }
            //         },
            //         {
            //             loader: 'html-loader',
            //             options: {
            //                 minimize: true
            //             }
            //         }
            //     ],
            //     exclude: /node_modules/
            // },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: path.resolve(base, '.tmp')
                        }
                    }
                ],
                exclude: /node_modules/
            },

            {
                test: /src\/app\/pages\/.*\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourcemap: false,
                            discardComments: {
                                removeAll: true
                            },
                            calc: false
                        }
                    }
                ],
            },

            {
                test: /src\/app\/pages\/.*\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            sourcemap: false,
                            discardComments: {
                                removeAll: true
                            },
                            calc: false
                        }
                    },
                    "sass-loader"
                ],
            },

            // {
            //     test: /(node_modules|src\/app\/components).*\.css$/,
            //     loader: vendorCssPlugin.extract({
            //         fallbackLoader: 'style-loader',
            //         loader: {
            //             loader: 'css-loader',
            //             // XXX : 需要关注 https://github.com/webpack/css-loader/pull/400
            //             query: {
            //                 minimize: true,
            //                 sourcemap: true,
            //                 discardComments: {
            //                     removeAll: true
            //                 },
            //                 calc: false
            //             }
            //
            //         }
            //     })
            // },

            {
                test: /(node_modules|src\/app\/components).*\.css$/,
                loader: vendorCssPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: 'css-loader',
                        // XXX : 需要关注 https://github.com/webpack/css-loader/pull/400
                        options: {
                            minimize: true,
                            sourceMap: true,
                            discardComments: {
                                removeAll: true
                            },
                            calc: false
                        }

                    }
                })
            },

            {
                test: /(node_modules|src\/app\/components).*\.scss$/,
                loader: appCssPlugin.extract(
                    {
                        fallbackLoader: 'style-loader',
                        loader: [
                            {
                                loader: 'css-loader',
                                // XXX : 需要关注 https://github.com/webpack/css-loader/pull/400
                                query: {
                                    minimize: true,
                                    sourcemap: false,
                                    discardComments: {
                                        removeAll: true
                                    },
                                    calc: false
                                }
                            },
                            "sass-loader"
                        ]
                    })
            },
            // {
            //     test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 name: "assets/fonts/[name]-[hash].[ext]"
            //             }
            //         }
            //     ]
            // },


            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/fonts/[name]-[hash].[ext]",
                            publicPath: './'　//重新指定访问路径　　参考　https://github.com/webpack-contrib/file-loader
                        }
                    }
                ]
            },

            {
                test: /\.(jpg|jepg|png|gif)(\?]?.*)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "assets/imgs/[name]-[hash].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: plugins,
    devtool: "source-map",
    devServer: {
        // contentBase: path.resolve(base, 'build'),
        // contentBase: path.resolve(base, 'outputPath'),

        contentBase: path.resolve(base, outputPath),
        historyApiFallback: true,
        stats: {
            modules: false,
            cached: false,
            colors: true,
            chunk: false
        },
        host: '192.168.0.41',
        port: 8080,
        inline: true,
        hot: true,
        open: true,
        clientLogLevel: "info",
        compress: false,
        quiet: false
    },
};

module.exports = config;
