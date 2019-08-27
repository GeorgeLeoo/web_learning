const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    // 入口文件配置
    entry: './src/js/entry.js',
    // 出口文件配置
    output: {
        path: path.resolve(__dirname, 'dist/'),
        // publicPath: '/',
        // 输出文件名
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于8192b的的图片打包为base64进js中
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        // contentBase: './'    // 默认服务于跟路径下的index.html
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'})
    ]
};