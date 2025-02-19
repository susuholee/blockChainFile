    // TCP 서버 구현

    // net 내장 모듈을 제공
    // http 보다는 이전 내용의 라이브러리

    // 모듈을 가져오기
const net = require('net'); // net 내장 모듈 가져옴
const PORT = 3000;

    // 서버 객체 생성
    // 서버 내용의 포함되어 있는 객체
    // 서버가 요청을 받으면 콜백이 실행된다.   
    // createServer() 매개변수 : 요청을 받았을때 호출할 함수의 내용을 매개변수로 전달
const server = net.createServer((client) =>{

    console.log(client);
    // 클라이언트가 서버에 접속을 콜백함수 실행
    // 요청의 데이터르 받으면
    // 바이너리 데이터 형식의 데이터를 받는다. (2진수)
    client.setEncoding('utf-8');
    // 데이터의 설명의 부분이 요청 헤더에 포함된다.
    // GET, POST 기본적인 요청 방식
    // GET은 값을 조회할 용도로 사용하는 방식, 민감한 데이터는 GET 요청에 포함시키지 말자, 게시글의 내용만 조회할 때
    // POST는 값의 조회 용도 뿐만 아니라 값을 전달하는 목적도 가지고 있는 방식
    
    // 이 문자열을 객체로 파싱한 내용이 요청 객체

    // 헤더의 내용에서 중요한 값들 요청 방식과 컨텐츠의 타입
    // GET /index HTTP/1.1 이런식으로 요청 경로에 따라서 어떤 내용의 데이터를 요청했는지 판별한다.      
    // 요청 방식은 GET의 방식이고, http 버전은 1.1 버전을 사용하고 있다.
    // 1.1 버전은 지속적인 연결을 할 수 있게 되었다. 캐시 작업 인증 에러처리등의 기능이 개선됨
    // 호환성 비교적으로 간단하게 구현이 가능래서 가장 큰 이유는 1.1을 사용하면서 굳이 2버전을 사용할 이유가 없기 때문에
    // 옛날에 만들어진 브라우저들은 2버전을 지원하지 못하는 경우가 있을 수 있다.

    // Host : localhost:3000 // 요청을 보낸 호스트의 주소와 포트, 서버는 요청을 허용한 클라이언트에서 요청을 보냈는지


    // GET /favicon.ico HTTP/1.1
    // Connection: keep-alive
    // sec-ch-ua-platform: "Windows"
    // User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36
    // sec-ch-ua: "Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"
    // sec-ch-ua-mobile: ?0
    // Accept: image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8
    // Sec-Fetch-Site: same-origin
    // Sec-Fetch-Mode: no-cors
    // Sec-Fetch-Dest: image
    // Referer: http://localhost:3000/
    // Accept-Encoding: gzip, deflate, br, zstd
    // Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
    // Cookie: Webstorm-a4be6a85=a6dd1d83-090f-47c2-bc10-35d1f6e31664


   


    // data는 클라이언트에서 메시지를 받았을 때 요청을 받았을 때
    // 콜백 함수가 실행
    // utf-8의 형식으로 문자열 인코딩
    // client.setEncoding('utf-8')
    // 콜백 함수에는 데이터의 내용을 받을 수 있다.
   
    client.on('data', (data) => {
        console.log(data);
         // 1 요청 1응답
        const body = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>안녕<div>하세요
    <ul>
        <li>아이템</li>
        <li>아이템</li>
        <li>아이템</li>
        <li>아이템</li>
    </ul>
</body>
</html>`;

        // 서버에서 클라이언트에게 응답 헤더
        // 응답을 할때 성공OR실패 에 따라서 숫자로 표현한 내용
        // 100
        // 200 성공
        // 300 리다이렉트
        // 400 실패 : 클라이언트측에서 실패
        // 500 서버가 에러발생
        // body 내용은 두줄 내려서 작성한 구문
        const resHeader = `HTTP/1.1 200 OK
        Content-Type : text/html 
        Content-Length : ${body.length}

        ${body}
        `
        // 브라우저의 화면에 받은 데이터를 작성하는 메서드
        client.write(resHeader);
        // end() : 응답을 하고 종료
        client.end();
    })  
})
 
// listen() :
server.listen(PORT, () => {
    console.log("서버 잘 열림~");
})
