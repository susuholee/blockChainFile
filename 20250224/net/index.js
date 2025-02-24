// const http = require("http");

// const server = http.createServer((req, res)=>{
//     console.log(res);
//     res.setHeader("Content-Type", "text/plain; charset=utf-8") // 응답 헤더 Content-Type 내용 추가
//     // 조건문으로 응답 경로에 따라서 메인페이지, 상품 페이지가 나타난다.
//     if(req.url === "/") {
//         res.end("메인 페이지");
//     } else if (req.url === "/shop") {
//         res.end("상품 페이지");
//     } 
//     // console.log(res);
// })
// server.listen(3000, () => {
//     console.log("서버가 잘 열렸어")
// })

const net = require('net');
const {request : { getRequest }} = require('./lib/request');
const getResponse = require("./lib/response");
const staticFileObj = require("./lib/static");
/*
 {
  '/css/main/main.css': 'main.css',
  '/css/mypage/mypage.css': 'mypage.css',
  '/css/shop/shop.css': 'shop.css',
  '/css/style.css': 'style.css',
  '/js/index.js': 'index.js'
}
 */

// { request : { getHeaders}}

const server = net.createServer((client) => {
    // client.setEncoding("utf8")
    let buffer = Buffer.alloc(0); // buffer를 사용할 변수로 정의만 해놓은 것.
    client.on('data', (chunk) => {
        // concat() : 바이너리 데이터를 이어 붙인다.  ex) [0,1,2] -> 0 1 2
        buffer = Buffer.concat([buffer, chunk]);
        const req = getRequest(buffer);
        const res = getResponse(client, req);
        // 요청 경로에 따라서 사용자가 필요한 데이터를 응답
        // API 문서 작성 : 어떤 경로에 요청을 보내면 어떠한 데이터의 형식과 데이터의 타입을 받을 수 있는지.
        // 프론트 엔드와 백엔드와 같이 작업을 할건데,
        // 백엔드가 문서를 만들어서 프론트 엔드에게 전달

        // 정적 파일 라우팅 처리
        // 서버에 파일이 있는지 검사를 해서 있으면 파일을 정적 라우팅 처리를 해줘야한다.
        // if(req.header.startLine.url === "/css/style.css"){
        //     res.sendStatic("/css/style.css")
        //     return;
        // }

        // 정적 파일 라우팅을 미들웨어로 추가한다.
        // 함수 여러개를 미들웨어로 호출한다.
        for (const path in staticFileObj) {
            console.log(path, "path");
            console.log(req.header.startLine.url, "req.url");
            if(path === req.header.startLine.url) {
                res.sendStatic(path);
                return;
            }
        }


        if(req.header.startLine.url === "/") {
            res.send('index');
        } else if(req.header.startLine.url === "/boardData") {
            console.log("/boardData 경로로 요청 받았고 게시글 데이터 응답")
            res.notFound("에러 페이지");
        } else if(req.header.startLine.url === "/css/style.css") {
            res.notFound("에러 페이지")
        }
        // console.log(req);
    })
})

server.listen(3000, () => {
    console.log("서버 작동중...")
})