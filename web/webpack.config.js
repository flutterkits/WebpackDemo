// 学习webpack使用到的配置文件
const path = require('path');
module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",//入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),//本地服务器所加载的页面所在的目录
        historyApiFallback: true,
        inline: true//实时刷新
    },

    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: path.resolve(__dirname, '../node_modules/')
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options:{
                            modules:true
                        }
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    }
}