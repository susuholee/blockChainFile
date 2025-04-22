// js파일 모듈을 내보내서 사용
// 설정의 내용을 가지고 있는 객체를 내보내서
const path = require('path');

module.exports = {
    entry : "./src/index.js", // 진입점 및 시작 파일
    mode : "development", // 개발 모드, 운영 모드
    output : {
        filename : "bundle.js", // 번들링해서 내보내는 파일의 이름
        path : path.join(__dirname, "dist") 
    }
}