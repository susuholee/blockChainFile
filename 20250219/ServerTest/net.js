// net 내장 모듈을 사용한 서버 구축
const net = require('net');
// console.log(net);


// 포트 번호를 정의하는 Port 선언 
const Port = 3000;


// 서버 객체 생성
const server = net.createServer((user) => {
    console.log(user);
    user.setEncoding("utf-8");

    // 클라이언트가 요청 메시지를 전송했을 때 콜백함수가 실행
    user.on('data', (data) => {
        console.log(data);

        // middle 즉, body 내용이 온다.
        const midddle = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0 auto;
            padding: 0;
        }
        .total {
            width: 100%;
            height: 100vh;
            background-color: aqua;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="total">나야 참기름</div>
    </div>
</body>
</html>`;

        // 요청 받을 부분을 작성
        const resbody =  `HTTP/1.1 200 OK
Content-Type: text/html
Content-Length : ${midddle.length}

${midddle}`

        // 클라이언트가 응답 헤더를 받은 데이터를 화면에 출력
        user.write(resbody);
        
        // 요청을 받고 나서 클라이언트와 서버간의 논리적 연결을 끊음
        // 1요청, 1응답
        user.end();
    })
})

server.listen(Port,() => {
    console.log("서버가 구동중...");
})