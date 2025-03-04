const express = require("express");
const boardRouter = require('./routers/board.router');
const app = express();

// 메서드와 경로에 따라서 핸들러함수를 호출하는 로직이 들어있다.
// 핸들러 함수
console.dir(boardRouter);

app.set("view engine", "ejs");

// 쉽게 생각해서 
// use에 추가한 경로와 뒤에 라우터 함수로 추가한 경로가
// 경로가 합쳐진 형태로 요청을 받았을때 라고
app.use("/board",boardRouter);

app.get("/", (req, res) => {
    res.render("main")
})

app.listen(3000, () => {
    console.log("server on~");
})