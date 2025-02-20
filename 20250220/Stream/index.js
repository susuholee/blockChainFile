// node js의 내장 모듈
// stream

// Transform : 스트림 데이터를 읽고 데이터를 변환한 뒤, 다른 스트림으로 데이터를 전달하는데 사용
const { Transform }  = require("stream"); // stream 내장 객체를 가져오고, Transform 내장 모듈을 구조분해 할당

// nodejs 의 내장 모듈을 사용해서
// 파일을 읽거나 쓰거나
// fs : 파일 시스템 모듈을 사용해서 파일의 CRUD 제어할 수 있다.
const fs = require('fs');

// 청크의 크기
// 스트림에서 작업할 때 데이터를 받고 처리할 때마다 각 청크의 크기를 정해주자

const chunckSize = 64 * 1024; // 64KB

// Transform () : 생성자 함수를 호출할 때 필요한 옵션의 값을 가지고 있는 객체
const transformData = new Transform({
    highWaterMark : chunckSize, //  highWaterMark 키에는 청크에 크기의 값을 전달.
    transform(chunk, en, callback) { // 콜백은 변환이 되면 호출할 내용
        // chunk : 청크 단위의 데이터를 받는 것.
        // 여기서 this는 chunk
        // toUpperCase() : 대문자로 변환
        // toLawerCase() : 소문자로 변환
        this.push(chunk.toString().toUpperCase());
        // 변환이 완료가 되면 콜백함수 호출
        callback();
    }
})

// 파일을 text.txt 하나 만들고 파일에 있는 내용을 text2.txt 파일에 내용을 추가

// 파일을 읽어오고 
// fs.createReadStream() : 파일을 읽어오는데 스트림 데이터를 읽어온다.
// 매개변수 첫 번째 파일의 경로 
// 매개변수 두 번째 옵션 값을 객체로 전달
const text = fs.createReadStream('text.txt', {highWaterMark : chunckSize});
console.log(text);
// 파일 읽기 스트림 생성

// text2 파일에 내용에 스트림 데이터를 추가
// 파일에 스트림 데이터 추가 
// fs.createWriteStream() : 파일에 스트림 데이터를 추가한다.
// 매개변수 첫 번째
const text2 = fs.createWriteStream('text2.txt');

// 스트림으로 내용을 파일에서 읽어와서 다른 파일의 내용으로 추가
// pipe() : 메서드를 호출하는 객체의 데이터에 내용을 매개변수로 전달한 스트림 객체에 내용을 이동시킨다.
text.pipe(transformData).pipe(text2);