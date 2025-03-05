const express = require('express');
const boardRouter = require('./routers/board.router');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/image", express.static(path.join(__dirname, "upload")));

app.use(express.urlencoded({extended : false}));

app.use(boardRouter);

// app.get('/', (req, res, next) => {
//     req.user = "날 지나가";
//     next()
// }, (req, res) => {
//     res.send(req.user)
// })

// // 요청 객체 하나 생성
// // "안녕"이라는 텍스트를 응답 받음
// app.get('/', (req, res) => {
//     res.send("안녕");
// })

app.listen(3000, () => {
    console.log('서버 작동중~~');
})