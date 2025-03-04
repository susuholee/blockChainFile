# 라우터, MVC 패턴

## 라우터
> 사용하는 API의 형태를 목적에 맞게 나눠서 관리하고 유지보수성을 높여서 라우팅을 분리
> API 문서를 작성을 한뒤에 라우터를 나눠서 유지보수성과 확장성을 높여서 관리

## express로 라우팅 처리
```js
// server.js
const express = require("express");
const routerBoard = require('./router/board.js')
const app = express();
// 서버의 로직 즉 상태를 관리하는 객체
// 게시판을 관리할 API
// 미들웨어로 추가
// use get post 상관없이
// 모든 경로 요청에서 처리가 된다.
// /board로 요청을 보내면 
// /board/create
app.use("/board", router);

app.get('/', (req, res) => {
    res.send("메인 페이지")
})

app.listen(3000, () => {
    console.log("server on~");
})


// router/board.js
const router = require("express").Router();
// 핸들러 함수 콜백으로 등록할수 있는 router객체를 제공

// GET / HTTP/1.1
router.get('/', (req, res) => {
    res.send("게시글 출력")
})

router.post('/create', (req, res) => {
    res.send("게시글 추가")
})

module.exports = router;

```

```sh
npm init -y
npm i express ejs
```