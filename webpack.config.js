'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const sgmfScripts = require('sgmf-scripts');

const CARTRIDGES = ['app_custom_demo', 'int_backinstock'];

const withCartridge = (cartridgeName, factory) => {
    const originalArgv = process.argv.slice();

    try {
        process.argv = originalArgv.concat(['--cartridgeName', cartridgeName]);
        return factory();
    } finally {
        process.argv = originalArgv;
    }
};

module.exports = CARTRIDGES.flatMap((cartridge) => {
    const staticPath = path.resolve(`./cartridges/${cartridge}/cartridge/static`);
    const jsEntries = withCartridge(cartridge, () => sgmfScripts.createJsPath());
    const scssEntries = withCartridge(cartridge, () => sgmfScripts.createScssPath());

    return [
        {
            mode: 'production',
            name: `js-${cartridge}`,
            entry: jsEntries,
            output: {
                path: staticPath,
                filename: '[name].js'
            }
        },
        {
            mode: 'production',
            name: `scss-${cartridge}`,
            entry: scssEntries,
            output: {
                path: staticPath
            },
            plugins: [
                new FixStyleOnlyEntriesPlugin(),
                new MiniCssExtractPlugin({
                    filename: '[name].css',
                    chunkFilename: '[name].css'
                })
            ],
            module: {
                rules: [
                    {
                        test: /\.scss$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    esModule: false
                                }
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    url: false
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    postcssOptions: {
                                        plugins: [require('autoprefixer')]
                                    }
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    implementation: require('sass'),
                                    sassOptions: {
                                        includePaths: [
                                            path.resolve('node_modules'),
                                            path.resolve(
                                                'node_modules/flag-icon-css/sass'
                                            )
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            optimization: {
                minimizer: [new OptimizeCSSAssetsPlugin({})]
            }
        }
    ];
});
