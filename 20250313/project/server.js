// npm i express ejs mysql2 jsonwebtoken dotenv bcrypt multer

// bcrryt 강력한 암호화를 제공
// $2A$[cost]$[salt][hash]
// $2A$ 사용하는 알고리즘
// [cost] 키 스트레칭 횟수 사용하는 숫자가 ^n으로 값이 들어간다. 10입력하면 일반적으로 10이 일반적 2^10
// 10 보다 크면 너무 오래걸린다.
// [salt] : 인코딩된 salt값을 만들어주는데 원본의 일부분을 salt로 사용한다. 
// [hash] : 비밀번호와 salt의 값을 합해서 해시한 인코딩 값

require('dotenv').config();
const express = require('express');
const path = require('path');
const userRouter = require('./routers/user.router');

const app = express();
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(userRouter);

app.listen(3000, () => {
    console.log("server on~")
})
