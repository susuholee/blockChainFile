const fs = require('fs');
const path = require('path');

const STATEMESSAGE = {
    200 : "Check",
    404 : "NOT FOUND",
    500 : "Server Error"   
}
// 200 : 성공의 내용
// 300 : 리다이렉트 
// 400 : 클라이언트 이슈
// 500 : 서버의 이슈

// 함수가 함수를 반환
// function getMessage () {
//     return function (){

//     }
// }

// 요청에 대한 응답 메시지를 작성할 함수
const getMessage = (request) => (body, stateCode = 200) => {
    const bodyBuffer = Buffer.from(body);
    // 여기서 반환 받은게 함수라서 temp에 색상 변경

    // 요청한 내용의 컨텐츠 타입을 확인을 해야함
    // content-type 을 응답 메세지에 담아줘야지
    // 응답을 할 때 요청한 내용의 컨텐츠를 응답해줘야 하니
    // 내가 이 컨텐츠를 응답했어
    const ContentType = request.header.headers.Accept.indexOf("text/html") !== -1 ? "text/html" :  request.header.headers.Accept; // text/html 이 있으면
    // "text/html"을 보내고, 없으면 Accept 를 그대로 요청한다
    // HTTP/1.1 200 ok
    // 응답 메시지 생성
    return `HTTP/1.1 ${stateCode} ${STATEMESSAGE[stateCode]}
Connection : Close
Content-Type : ${ContentType}; charset=UTF-8
Content-Length : ${bodyBuffer.length}

${body}`
}

// const temp = getMessage();

/*
    const temp = getMessage();
    temp = (body, stateCode = 200) => {
        const bodyBuffer = Buffer.from(body);
    }
    temp("123") === body = 123, stateCode = 200
    temp("123", 300) === body = 123, stateCode = 300
*/

// 클라이언트에게 응답할 객체를 최종 완성
const getResponse = (socket, request) => {
    // msg 매개변수로 body 내용과 상태코드 두 가지를 전달하면 응답 메시지를 반환하는 함수 생성
    const msg = getMessage(request);

    // 응답의 내용을 가지고 있을 객체
    return {
        notFound : (body) => {
            // 잘못된 요청을 했을 때 응답할 메서드
            const errorMessage = msg(body, 404);
            socket.write(errorMessage);
            socket.end();
        },
        send : (filename) => {
            // 응답을 하고 종료
            // readFileSync() : 비동기 처리를 해서 동기적으로 호출한 함수
            // 파일의 경로를 전달하면 파일의 내용을 가져온다.
            // 두 번째 매개변수로는 인코딩 방식식
            // 파일을 가져오는 동안 기다린다.
            // readFile 비동기 함수

            // 경로를 작성할 때 제공하는 내장 모듈이 있다.
            // path.join("./page", "main", ".." , "detail")
            // ./page/main/detail
            // 폴더의 경로를 만들어줄때 메서드를 제공한다

            // node js에서 제공하는 전역 변수
            // __dirname : 현재 파일의 폴더까지의 경로를 제공

            const file = fs.readFileSync(path.join(__dirname, "..", "views", filename + ".html"), "utf-8")
            socket.write(msg(file));
            socket.end();
        },
        // 파일의 이름을 받을 요청
        // css 정적파일을 보냄
        sendStatic : (filename) => {
            // public에서 정적 파일을 가져오고
            const dir = "public";

            // readFile
            // 첫 번째 매개변수
            // 두 번째 매개변수
            const filepath = path.join(dir, filename)
            fs.readFile(filepath, (err, data) => {
                if(err) return err;
                
                const resMsg = msg(data.toString());
                socket.write(resMsg);
                socket.end();
            })
        }
        /*
            lib == 라이브러리
            public == 정적 파일 (이미지,배너,아이콘)
            views == 보여줄 화면 (html)
        */
    }
}

// module.exports === { } 빈 객체
// module.exports = f ( ) 함수의 값이 할당

module.exports = getResponse;
