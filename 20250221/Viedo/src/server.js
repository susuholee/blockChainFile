// fs 모듈 가져오기
const fs = require("fs");
// http 모듈 가져오기
const http = require("http");
// path 파일의 경로를 문자열로 만들때 모듈
const path = require("path");
/*
main
--a
b
*/

// join() : 전달한 문자열들을 조합해서 경로의 문자열을 만들어준다.  "a", "..", "b" => "a/b"
// __dirname : 파일의 폴더의 경로까지 할당되는 변수

// console.log(__dirname);
// console.log(__filename);

let mypath  = path.join(__dirname, "src", "SampleVideo_1280x720_30mb.mp4");

// 파일을 제어할때 사용할 경로
console.log(mypath);
// 영상이나 사진 등등
// 서버 컴퓨터에 영상이나 이미지 등등의 리소스 파일은 서버에 있어야한다.
// 서버 로직을 다루는 서버, 리소스들을 다루는 서버
// S3 AWS에 있다.
// 클라이언트에 정적인 이미지들을 넣어서 배포 => 배너 혹은 아이콘 등 변경이 많지 않은 이미지들

// 서버 객체
const server = http.createServer((req, res) => {
    // GET / HTTP/1.1
    if(req.url == "/video") {
        // statSync () : 파일의 전체 크기
        // 왜 사용하나? -> 파일이 어느정도 전송되었는지 확인
        const state = fs.statSync(mypath);
        const fileSzie = state.size; 
        console.log(fileSzie);

        // 클라이언트 측에서 Range 속성을 헤더에 담아서 보내준다.
        // video 태그로 요청을 보내면 헤더에 Range가 포함된 헤더의 내용을 요청한다.

        // Range 헤더 내용을 처리
        const headerRange = req.headers.range;
        console.log(headerRange);
        // Range가 있으면 영상을 처리하는 방식을 나눠서 처리를 하고
        if(headerRange) {
            // 영상을 나눠서 처리하면서 버퍼링처리가 되면 영상을 재생
            const progress = headerRange.replace("bytes=", "").split("-")
            console.log(progress);
            // 영상을 송출할다가 문제가 생겨서 서버가 종료되었다.
            // 영상을 보고있었는데 서버가 문제생겨서 끊김
            // 서버가 정상적으로 동작을 하게되었을때
            // 클라이언트가 어디까지 영상을 처리했는지 이어서 시작지점을 정해줄 것.
            const start = parseInt(progress[0]);
            const end = progress[1] ?  parseInt(progress[1]) : fileSzie - 1;
            
            // 청크 크기
            const chunkSize = 3 * 1024; // 3KB

            // 비디오 스트림
            // 청크 단위씩 잘라서 가져온다
            // 어느 지점 부터 영상을 청크단위로 다시 처리할건지
            // 매개 변수 두 번째에 객체의 키를 start, end로 값을 영상을 어느만큼  스트림으로 가져올건지.
            const videoStream = fs.createReadStream(mypath, {start, end})

            // 206 성공인데, 리소스를 일부분만 제공했다. 일부분은 성공이야
            // 클라이언트에서 range 요청 헤더에 내용을 포함해서 보내면 컨텐츠를 처리할때 상태코드를 206으로 주면
            // 리소스를 일부분씩 제공하고 있다. 라는 성공 코드드
            res.writeHead(206, {
                "Content-Length" : chunkSize,
                "Content-Type" : "video/mp4",
                "Accept-ranges" : "bytes",
                "Content-range" : `bytes ${start} - ${end}/${fileSzie}`

            })
        } else {
            // 한번에 영상을 받을때 까지 처리하는 방식
            const videoStream = fs.createReadStream(mypath);
            res.writeHead(200, {
                "Content-Length" : fileSzie,
                "Content-Type" : "video/mp4"
            })

            videoStream.pipe(res);
        }
    }
})

server.listen(3000, () => {
    console.log("서버 작동중~")
})
