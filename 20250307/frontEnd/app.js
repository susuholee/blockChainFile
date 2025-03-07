// expree 모듈 가져오기
const express = require('express');

// path 모듈 가져오기
const path = require('path');

const axios = require('axios');
const cors = require('cors');

// app을 서버 상태로 설정
const app = express();
app.use(cors({
    origin : "*",
    credentials : true    
}))

// 데이터를 JSON 형태의 문자열 사용 미들웨어 추가
app.use(express.json()); 

// body 객체 파싱, 깊은 객체 사용 안함
app.use(express.urlencoded({extended : false}));


app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'page'));
// console.log(app);

// '/' 루트 경로로 요청을 보내면 응답을 받는데 메인페이지를 보여준다
app.get('/', (req , res)  => {
    res.render('main');
})

// 로그인으로 get 방식 요청이 들어오면 로그인 페이지를 보여준다
app.get('/login', (req, res) => {
    res.render('login');
})

// 회원가입으로 get 요청이 들어오면 회원가입 페이지를 보여준다
app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/error', (req , res) => {
    res.render('error');
})

// 회원가입 post 요청이 들어오면
app.post('/signup', async (req, res) => {
    const { uid , upw } = req.body;
    const {data} = await axios.post('http://127.0.0.1:4000/signup', {uid, upw});
    console.log(data);
    if(data.state === 200) {
        res.redirect('/login');
    } else {
        res.redirect('/error');
    }
})


// 로그인으로 post 요청이 들어오면
app.post('/login', async (req, res) => {
    const {uid, upw} = req.body;
    console.log(uid, upw);
    const { data }  = await axios.post('http://127.0.0.1:4000/login', { uid, upw})
    console.log(data);
    
    // 헤더에 쿠키의 값을 저장해 라는 요청을 브라우저에게 응답
    res.cookie('login-token', data.token, {
        maxAge : 10 * 60 * 60 * 1000,
        httpOnly : true
    })
    // set cookie라는 헤더를 응답 메세지의 헤더로 추가
    // 쿠키 값을 생성 시킨다.
    // httpOnly 요청과 응답 간에만 쿠키의 값을 사용할 수 있는 속성, 자바스크립트에서 제어X
    res.send('');
})

app.put('/login', (req, res) => {
    const {uid , upw} = req.body;
    console.log(uid, upw);
    res.send('')
})




// 서버가 3000번 포트로 듣는다.
app.listen(3000, () => {
    console.log('프론트 서버 동작중..')
})