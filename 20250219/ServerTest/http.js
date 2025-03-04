// http 모듈 가져오기
const http  = require('http');


// 포트 변수 선언
const PORT = 3000;

// 서버 객체 생성
const server = http.createServer((req, res) => {
    // 첫 번째는 요청 객체
    // 두 번째는 응답 객체
    // console.log(res);
    // console.log(req);
    
    // res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    // 응답 헤더에 대한 정보를 기록
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'})
    // res.write() :  본문(body)에 보여지는 부분을 나타내는 메서드
    res.write('안녕하세요')
    res.end();

});



// 클라이언트가 서버에게 요청을 보냈을 때
// listen()
// 1. 포트번호
// 2. 콜백함수
server.listen(3000,() => {
    console.log("서버 작동중...")
})

