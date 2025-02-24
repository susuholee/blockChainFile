// 외부 라이브러리를 가져오기
// 서버 객체를 만드는 함수
const express = require('express');
const fs = require("fs");
const path = require("path");
// app에는 서버의 객체가 포함
const app = express();
app.use(express.static(path.join(__dirname, "public")));
console.log(express.static(path.join(__dirname, "public")));
const PORT = 3000;
// GET /HTTP/1.1
// 요청 메세지에 GET 요청이 들어왔을 때
// 요청이 GET이고, 경로가 "/" 면 호출할 콜백을 전달
// 요청 객체, 응답 객체를 매개변수로 전달

// 라우팅 처리
// 요청 URL 경로에 따라서 클라이언트에게 어느 핸들러를 호출해서 응답을 줄건지

 app.get('/', (req, res) => {
     // req : 요청 메세지를 파싱한 객체다. 즉, 요청 객체
    // res : 응답 메세지를 만들어주는 객체, 응답 객체
    // console.log(req);
    // console.log("안녕");
   const filePath = path.join(__dirname, "views", "index.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
        if(err) return res.send("404 페이지가 존재하지 않습니다.");
       res.send(data)
    })
 })

// 요청이 들어오면 기능을 실행시키는 것
// 첫 번째 미들웨어가 먼저 호출된다. 코드의 순서 중요
// 세 번째 매개변수를 받아서 다음 미들웨어를 호출할 수 있다.
// 로그인 인증 관련된 라우팅 처리할때 등등
// app.get("/", (req, res, next) => {
//     // next는 다음 미들웨어 호출
//     if(true) {
//         next();
//     } else {
//         res.send('123')   
//     }
// })

// app.get('/', (req, res) => {
//     res.send('안녕')
// })


app.post('/', (req, res) => {
    res.send({uid : "suho"})
})

app.listen(PORT, () => {
    console.log("Server on..")
})

