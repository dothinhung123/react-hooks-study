const path = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin')

module.exports = {
    entry:{
        polyfill:'@babel/polyfill',
        index:'./src/index.js'
    },
    devtool:'inline-source-map',
    plugins:[
        new HtmlWebpackPlugin({
            title:"Hooks Management",
            template:"./public/index.html"
        })
    ]
    ,
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                }
            
            },
            {
                test:/\.(css|scss)$/,
                use:['style-loader','css-loader','scss-loader']
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader'
                }

            }

        ]
    },
    devServer:{
        contentBase:"./dist",
        open:'chrome'
    },
    mode:"development",
    output:{
        filename:'[name].main.js',
        path:path.resolve(__dirname,'dist')
    }

}