# EXpress 
> nodejs 환경에서 프레임워크 형태나 라이브러리를 사용해서
> 메서드를 활용해서 서버의 API를 쉽게 만들 수 있다.

## 장점
> 코드의 간결성 최소의 코드로, 서버로직을 작성할 수 있다.
> 미들웨어 사용도 간단해진다. 요청과 응답 간에 기능을 추가
> 라우팅의 코드 간결성 API를 쉽게 구성할 수 있다.
> 템플릿 엔진 지원, 서버측에서 문자열로 페이지로 구성하고 자바스크립트 영역에 내용을 포함시킨뒤 페이지를 완성해서 응답을 해주는 엔진

## express 설치
```sh
# package.json 
# 초기화
# package.json 내가 작업하는 프로젝트의 내용
# 어떤 의존성 라이브러리를 사용하고 있는지.
npm init 
npm init -y
# package.json에는 프로젝트에서 혹은 라이브러리에서 사용하는 의존성이 기록된다ㅣㅣ


# npm i [설치할 라이브러리]
# npm install 배포가 되어있는 라이브러리를 설치한다.
# npm uninstall 설치한 라이브러리 제거
# npx 설치한 node에 내장된 명령어를 실행할 때
npm i express;

## lock.json는 실제 라이브러리에 대한 내용

## dependencies 는 우리가 설치한 라이브러리에 대한 버전 내용

# 여러개의 라이브러리를 설치
npm i express ejs mysql;

```
```js
// 외부 라이브러리를 가져오기
// 서버 객체를 만드는 함수
const express = require('express');
const fs = require("fs");
const path = require("path");
// app에는 서버의 객체가 포함
const app = express();


const PORT = 3000;
// GET /HTTP/1.1
// 요청 메세지에 GET 요청이 들어왔을 때
// 요청이 GET이고, 경로가 "/" 면 호출할 콜백을 전달
// 요청 객체, 응답 객체를 매개변수로 전달

// 라우팅 처리
// 요청 URL 경로에 따라서 클라이언트에게 어느 핸들러를 호출해서 응답을 줄건지지
app.get('/', (req, res) => {
    // req : 요청 메세지를 파싱한 객체다. 즉, 요청 객체
    // res : 응답 메세지를 만들어주는 객체, 응답 객체
    // console.log(req);
    // console.log("안녕");
    const filePath = path.join(__dirname, "views", "index.html");
    fs.readFile(filePath, "utf-8", (err, data) => {
        if(err) return res.send("404 페이지가 존재하지 않습니다.");
        res.send(data)
    })
})

app.post('/', (req, res) => {
    res.send({uid : "suho"})
})

app.listen(PORT,() => {
    console.log("Server on..")
})
```
## 정적 파일 미들웨어 추가
> 미들웨어는 요청과 응답간에 사이에 기능을 추가할 수 있다.
```js
const express = require("express")
const app = express();

app.get('/', (req, res, next) => {
    next();
})

app.get("/", (req, res) => {
    res.send('안녕하세요')
})

app.listen(3000,() =>{
    console.log("server on")
})
```
## 정적 파일 라우팅 미들웨어 추가

```js
const express = require('express');
const app = express();
// use : 사용할 미들웨어 추가
// use 경로를 넣을수도 있고, 안넣을수도 있다.
app.use('/', () => {
    // next 호출
})

app.use(() => {

})

// express.static -> 정적 라우팅 처리를 하는 미들웨어를 반환
app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
    console.log("server on~")
})
```

## 게시판 안에 내용
```js
const boardContent = [{title : '', index : 0, content :''},{},{}]
// 브라우저에서 처리하는 방식
// 브라우저에서 해석한 자바스크립트 구문에서 dom 제어하는 방식
// 템플릿 엔진을 사용
// 서버측에서 요소를 제어해서 내용을 응답
// 템플릿 엔진의 자바스크립트 영역

`${}` :  // 이런 템플릿 리터럴 처럼
for(let i = 0;  i < boardContent.length; i++) {
}
<html>
    <header></header>
    <body>
        % for(let i = 0; i < boardContent.length; i++) { %
            <div>%= boardContent[i].title %</div>
        % } %
    </body>
</html>
=>
<html>
    <header></header>
    <body>
        <div>1</div>
        <div>2</div>
        <div>3</div>
    </body>
</html>
// 브라우저에게 응답
```
### 실습 과제
> main 페이지
> login 페이지
> board 페이지
> detill 페이지
> 라우팅 처리를 해서 페이지 보여주기 각각의 페이지는 css를 가지고 있게 정적 라우팅 추가 미들웨어