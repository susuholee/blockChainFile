// fs 모듈 불러오기
const fs = require("fs");
// console.log(fs);

// exists() : 파일이 있는 없는지 판단
// 반환값 : boolean
// 비동기적 호출
// 매개변수로 1.path , 2. 콜백
fs.exists("./fsTest", (callback) => {
    // console.log(callback);
    console.log("비동기식 호출중..")
})

// existsSync () : 파일이 있는지 없는지 판단
// 동기식 호출 
const File = fs.existsSync("./fsTest");
console.log(File);
console.log("동기식 호출중..")


// 비동기적 호출
// 디렉토리 생성 mkdir(path, option, callback)

// if(!File){
//     fs.mkdir('./fsTest', (err) => {
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
// if(File) {
//     const text =  fs.mkdirSync('./fsTest');
//     console.log(text);
// } 
// console.log("실행중..")
