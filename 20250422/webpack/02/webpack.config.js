const path = require('path');

module.exports = {
    entry : "./src/index.js",
    mode : "development",
    // 모듈을 가져올때 규칙
    module : {
        rules : [
            {   
                // 파일의 이름을 검사(정규식 같은것)
                test : /\.css$/,
                // css확장자가 붙은 파일인지 검사
                // 어떤 로더로 이 파일을 
                // npm i style-loader css-loader
                use : ["style-loader", "css-loader"]
                // use : 사용하고 싶은 로더를 작성
                // "style-loader", "css-loader" : html문서의 헤더쪽에 style 태그를 추가하고 css코드를 추가
                // css-in javascript
            }
        ]
    },

    output : {
        filename : "bundle.js",
        path : path.join(__dirname, "dist")
    }
}