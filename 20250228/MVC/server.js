const express = require('express');
const userRouter = require('./routers/user.router');
const app = express();

app.set("view engine", "ejs");
// GET / http/1.1

// body
// input name {uid : [1,2,3,4], upw : {}}
app.use(express.urlencoded({extended : false}));
// body
// express.urlencoded({extended : false}) === 반환값 function
// 어떤 함수냐? 핸들러 함수
// 요청 메시지가 발생했을때 
// app.use((req, res, next)=> {
    //     // req안의 내용에서 body 내용을 가지고 문자열을 객체로 변환
    //     // JSON.parser
    //     // body라는 키를 추가하면서
    //     req.body = {}
    //     next();
// })

// 오류가 어디서 나는지
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('server on~')
})