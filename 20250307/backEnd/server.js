const express = require('express');
const cors = require('cors');
const { signup } = require('./controllers/user.controller');
const { userFindUid, userFindUidUpw } = require('./models/user');

const app = express();

// 데이터를 JSON 형태의 문자열 사용 미들웨어 추가
app.use(express.json()); 

// express 요청 객체에 body 
app.use(express.urlencoded({extended : false})) 

app.use(cors({
    origin : "http://localhost:3000",
    methods : ["GET", "POST", "PUT", "DELETE"],
    credentials : true // 쿠키와 세션을 서버간 요청을 검증 
}));
// 요청을 보낼 때 쿠키 값을 포함하려면 credentials 검증의 속성이 활성화 되어야한다.

app.post('/login', (req, res) => {
    const {uid, upw} = req.body;
    console.log(req)
    console.log(uid, upw);
    const user =  userFindUidUpw({uid, upw}) ;
    if(user){
        res.send({state : 200, message : "로그인 성공", token : `${uid} code`});
    } else {
        res.send({state : 400, message : "로그인 실패"});
    }
})

app.post('/signup', async (req , res) => {
    const data = await signup(req);
    res.send(data);
})

app.listen(4000, () => {
    console.log('백엔드 서버 작동중...');
})