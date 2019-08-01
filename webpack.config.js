const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    entry: [
        "babel-polyfill",
        path.join(__dirname, './src/main.js')
        // path.join(__dirname, './src/lib/index.js')
    ],
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // use: ['babel-loader'],
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                },
                include: path.join(__dirname , 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                  loaders: {
                    'js': 'babel-loader',
                    'scss': [
                      'vue-style-loader',
                      'css-loader',
                      'sass-loader'
                    ],
                    'sass': [
                      'vue-style-loader',
                      'css-loader',
                      'sass-loader?indentedSyntax'
                    ]
                  }
                }
              },
              {
                    test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                    use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                    }]
                }
        ]
    },
    mode: 'development',
    devServer: {
      contentBase: path.join(__dirname, 'bundle'),  //启动路径
      host:'localhost',  //域名
      port: 8018,  //端口号
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "index.html",  //打包后的文件名
            template: path.join(__dirname , "./src/index.html")  //要打包文件的路径
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
      },
};
