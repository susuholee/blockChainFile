// fs 모듈 불러오기
const fs = require("fs");
// console.log(fs);

// exists() : 파일이 있는 없는지 판단
// 반환값 : boolean
// 비동기적 호출
// 매개변수로 1.path , 2. 콜백
// fs.exists("./fsTest", (callback) => {
//     console.log("비동기식 호출중..")
//     // console.log(callback);
// })

// // existsSync () : 파일이 있는지 없는지 판단
// // 동기식 호출 
// // 매개변수 1.path(경로)
// // 반환값 : Boolean
const File = fs.existsSync("./fsTest");
// console.log("동기식 호출중..")
// console.log(File);


// --------- Create ----------------- //
// 비동기적 호출
// 디렉토리 생성 mkdir(path, option, callback)

// if(!File){
//     fs.mkdir('./test', (err) => {
//         if(err){
//             console.log(err)
//         }
//         else {
//             console.log("폴더 생성")
//         }
//     })
// }

// 오류 발생 : Error: EEXIST: file already exists, mkdir 
// 오류를 해결하려면 조건문을 수정할 필요가 생김
// 동기적 호출
// if(!File) {
//     const text =  fs.mkdirSync('./test');
//     console.log(text);
// } 
// console.log("실행중..")

// 생성한 test 폴더안에 파일 생성
// fs.writeFile("path", "파일의 담을 내용", (콜백함수))

// 파일의 담을 내용을 정의
const content = `const a = 20;`

const content2 = `const b = 10;`

// ./test 경로안에 text.js 파일을 생성하고
// 파일의 담을 내용은 content 에 저장이 됨
// 콜백함수로 err 객체가 있고
// 오류가 발생하면 콜백함수를 실행
// fs.writeFile('./test/text.js', content2, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(content2);
//     }
// })

// ------------- READ ----------------- //
// fs.readFile() # 비동기식 호출
// 파일을 읽어오는데 사용되는 메서드
// 매개변수 
// 1. 파일의 경로
// 2. 옵션 (파일 인코딩, 문자열 객체 등등)
// 3. 콜백함수를 받는데 콜백함수와, 파일 내용을 매개변수로 받을 수 있다.
// fs.readFile('./test/text.js', "utf-8", (err, content) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(content);
//     }
// })

// fs.readFileSync() # 동기식 호출
// 매개변수
// 1. path(경로)
// 2. 옵션 (파일 인코딩, 문자열 객체 등등)
// const sample = fs.readFileSync('./test/text.js', "utf-8");
// console.log(sample);

// ------------- DELETE ------------ //
// 파일 및 폴더를 삭제
// fs.rm() 
// 매개변수
// 1. path(경로)
// 2. 콜백함수 
// fs.rm('./test/text.js', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("폴더가 삭제되었습니다.")
//     }
// })
