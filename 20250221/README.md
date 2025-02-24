# fs 대용량 영상 처리

### fs 파일 시스템 내장 모듈
> 파일을 읽거나, 쓰거나, 삭제, 생성 등을 할때 사용하는 내장 모듈

```js
// fs 내장 모듈을 가져온다
const fs = require("fs");

// 모듈의 안에 내장되어 있는 메서드를 활용해서 파일을 제어할 수 있다.

// exists ()
// 비동기 적으로 콜백 함수를 전달해서 실행
fs.exists("./Test", (e) => {
    console.log(e);
})

// existsSync () 
// 동기적으로 코드를 호출할 수 있는 메서드
// 반환값이 boolean 인데 , 폴더가 있는지 없는지 판단
const folder = fs.existsSync('./Test');

console.log(folder);
console.log("실행 1");

// 폴더가 없으면 생성
// mkdir() : 폴더 생성
if(!folder) {
    fs.mkdir("./Test", (err) => {
        if(err) {   
            console.log(new Error(err))
        } else {
            console.log("폴더 생성 완료")
        }
    })
}

const text = fs.mkdirSync("./Test");
console.log(text);
console.log("실행2");

// fs.writeFile()
// 폴더안에 파일을 추가
// 첫 번째 매개변수는 Path 경로
// 두 번째 매개변수는 파일의 담을 내용
// 세 번째 매개변수는 콜백 함수
const str = `
    안녕하세요
    저는 
    이수호 입니다.
`
fs.writeFile("./Test/text.txt", str, (err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("파일 생성 완료!");
    }   
})

// 파일을 만드는 이유는 ? -> 데이터를 저장하고 불러오기 위해서
// 파일을 읽어오기 (Read)
// 첫 번째 매개변수 에러, 두 번째 매개변수는 데이터를 받는다
fs.readFile("./Test/text.txt", "utf8", (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
    }
})

// 삭제(Delete)
// rm() : 파일을 삭제하고 콜백 함수 전달
fs.rm("./Test", (err) => {
    if(err) {
        console.log("error")
    } else {
        console.log("폴더가 삭제되었습니다.")
    }
})
```

### 대용량 영상

### 정적
