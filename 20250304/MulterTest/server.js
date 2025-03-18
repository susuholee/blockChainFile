// express 모듈 불러오기
const express = require('express');

// path 모듈 불러오기
const path = require('path');

const router = require('./routers/board.router');

// 서버 객체 생성 
const app = express();

// view engine에 'ejs'를 사용
app.set('view engine', 'ejs'); 

// public 경로를 정적으로 처리하는 미들웨어 추가
app.use("/public", express.static(path.join(__dirname, "public")));

// body(본문)의 내용을 파싱하겠다. 미들웨어 추가
app.use(express.urlencoded({extended : false}));

app.use(router);



app.listen(3000, () => {
    console.log("서버 작동하고 있다");
})