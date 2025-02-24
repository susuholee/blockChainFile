// 라우팅 처리를 해서 페이지 보여주기 각각의 페이지는 css를 가지고 있고 정적 라우팅 추가 미들웨어
//  main 페이지
//  login 페이지
//  board 페이지
//  detill 페이지

// 1 요청 1응답


// express 모듈 가져오기
const express = require('express');

// path 모듈 가져오기 
const path = require('path');

// fs 모듈 가져오기
const fs = require('fs');

// app은 express 객체를 가지고 있다.
const app = express();

// 포트 변수 지정
const PORT = 3000;

// 미들웨어 추가하는 메서드 use()  사용하여 express.static(path.join(__dirname, 'routerTest'));
app.use('/', express.static(path.join(__dirname, 'public')));
// console.log(express.static(path.join(__dirname, 'routerTest')));

// get 요청을 보내는데 각각 보내는 경로가 다르다

// 메인 페이지는 '/'
app.get('/', (req, res) =>{
    // console.log("메인 페이지");

    const Fileroute = path.join(__dirname, "main", "main.html")
    fs.readFile(Fileroute, "utf8", (err, data) => {
       if(err) return res.send("404페이지 오류");
       res.send(data);
    })
   
})

// 로그인 페이지는 '/login'
app.get('/login', (req, res) =>{
    // console.log("로그인 페이지");
    const Fileroute = path.join(__dirname, "login", "login.html")
    fs.readFile(Fileroute, "utf8", (err, data) => {
        if(err) return res.send("404페이지 오류");
        res.send(data);
    })
    
})

// 게시판 페이지는 '/board'
app.get('/board', (req, res) =>{
    // console.log("게시판 페이지");
    const Fileroute = path.join(__dirname, "board", "board.html")
    fs.readFile(Fileroute, "utf8", (err, data) => {
        if(err) return res.send("404페이지 오류");
        res.send(data);
    })
})

// 상세 페이지는 '/detail'
app.get('/detail', (req, res) =>{
    // console.log("상세 페이지");
    const Fileroute = path.join(__dirname, "detail", "detail.html")
    fs.readFile(Fileroute, "utf8", (err, data) => {
        if(err) return res.send("404페이지 오류");
        res.send(data);
        })
})


// 클라이언트가 서버에게 요청을 보낸다
app.listen(PORT, () => {
    console.log('server on~');
})