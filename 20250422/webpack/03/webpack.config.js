const path = require('path');
const htmlWebpack = require('html-webpack-plugin');

module.exports = {
    entry : "./src/index.js",
    mode : "development",

    module : {
        rules : [
            {
                // 파일의 확장자가 js 혹은 jsx이면
                test : /\.(js|jsx)$/, 
                // exclude : 제외할 폴더 정의
                // node_modules 같은거
                // 의존성 폴더의 내용은 제외하고, 파일을 읽을때 처리하겠다.
                exclude : /node_modules/,
                use : ["babel-loader"]
                // npm i -D babel-loader
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    // 기본 HTML 생성
    // htmlWebpackplugin
    // npm i -D html-webpack-plugin
    // html의 내용을 전달해야한다 -> 매개변수에 객체 전달
    plugins : [
        new htmlWebpack({
            template : "src/index.html", // 어디서 번들링 되는지지
            filename : "index.html" // 번들링 된 후 파일이름
        })
    ],

    output : {
        filename : "bundle.js",
        path : path.join(__dirname, "dist")
    }
}