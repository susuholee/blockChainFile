const fs = require('fs');
// exists ()
// 비동기 적으로 콜백 함수를 전달해서 실행
// fs.exists("./Test", (e) => {
//     console.log(e);
// })

// existsSync () 
// 동기적으로 코드를 호출할 수 있는 메서드
// 반환값이 boolean 인데 , 폴더가 있는지 없는지 판단
const folder = fs.existsSync('./Test');

console.log(folder);
console.log("실행 1")


// 비동기적 호출
// 폴더가 없으면 생성
// mkdir() : 폴더 생성
// if(!folder) {
//     fs.mkdir("./Test", (err) => {
//         if(err) {   
//             console.log(err)
//         } else {
//             console.log("폴더 생성 완료")
//         }
//     })
// }

// 동기적 호출
// 에러 발생 : Error: EEXIST: file already exists, mkdir 'C:\Users\akak7\OneDrive - 인덕대학교\바탕 화면\NodeFile\20250221\Test'
// 에러 해결 -> 조건문 필요
// if(!folder) {
//     const text = fs.mkdirSync("./Test");
//     console.log(text);
// }
// console.log("실행2");


// 폴더안에 파일을 추가
// 첫 번째 매개변수는 Path 경로
// 두 번째 매개변수로는 파일의 담을 내용
// 세 번째 매개변수는 콜백 함수

// writeFile() : 파일추가, 수정이 가능
const str = `안녕하세요
저는 
이수호 입니다.`
// fs.writeFile("./Test/text.txt", str, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("파일 생성 완료!");
//     }   
// })

// fs.writeFileSync()
// 첫 번째 매개변수 path 경로
// 두 번째 매개변수 파일의 내용
// const text2 = fs.writeFileSync("./Test/text.txt", str)
// console.log(text2);
// console.log("실행 3")



// =========== READ ============== //
// 파일을 만드는 이유는 ? -> 데이터를 저장하고 불러오기 위해서
// 파일을 읽어오기 (Read)
// 첫 번째 매개변수 에러, 두 번째 매개변수 데이터를 받는다
// 비동기 호출
// fs.readFile("./Test/text.txt", "utf8", (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// 동기적  호출
// 반환값을 받는 이유가 콜백을 전달하지 않고 일반 함수를 호출하면서 에러 내용이나 데이터를 받기 위해서 반환값을 받는다.
// const text3 = fs.readFileSync("./Test/text.txt", "utf8");
// console.log(text3);
// console.log("실행 4");


// =========== Delete ============== //
// // recursive () : 삭제할때 옵션으로 폴더 내부에 있는 파일까지 삭제를 허용하겠다.
// fs.rm("./Test", { recursive : true }, (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("폴더가 삭제되었습니다.");
//     }
// })
