const crypto = require('crypto');
const upw = "admin123";
// 해시 값을 생성하는 함수
// createHash() 메서드의 매개변수로 사용할 해시 함수 알고리즘 이름
const hash = crypto.createHash("sha256");
// hash 반환된 객체의 메서드를 사용해서 문자열 해시화
// update : 문자열 해시화
const hashing = hash.update(upw);
console.log("hashing 내용", hashing);

// digeset() : 해시 문자열 반환
// 64자리의 크기의 문자열 16진수로 표현된
const hashingString = hashing.digest('hex');

console.log(hashingString);
// 솔트의 값을 사용해서 예측이 불가능한 데이터를 만들어줘야 한다.

// salt를 사용해서 난수 생성
// 난수 : 랜덤한 값을 생성하는 것.
// crypto.randomBytes(사이즈 크기, 콜백함수(err, result)) : 
// crypto.randomBytes(32, (err, result) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(result.toString('hex'));
//     }
// })

// 이 값을 솔트값으로 만든다면?
// 예측할 수 없는 값을 만들 수 있다.
// 솔트는 안전하게 데이터베이스에 저장

// salt 값도 노출이 되기 힘들게 만들어야 한다.
// salt 값을 찾기 위해서 많은 시도를 한다.

// 헤커를 귀찮게 하는 방법

// 키 스트리칭 기법
// 해시 함수를 여러번 호출해서 시간을 일부러 오래 걸리게 만드는 기법

// createSalt : salt 생성하는 함수 
const createSalt = () => {
    // 콜백함수가 호출되는 시기 -> 난수가 생성이 되면 콜백을 매개변수로 전달
    // Promise 객체로 비동기 작업을 통해서 성공, 실패 상태로 값을 반환
    // 성공했을 때는 res의 결과값을 반환
    // 실패했을 때는 rej의 에러 반환
    // new Promise : 객체가 최초에 생성되면 상태가 pending 상태
    // 프로미스는 프로미스를 반환한다
    return new Promise((res, rej) => {
        crypto.randomBytes(32, (err, result) => {
                if(err) return rej(err);
                res(result.toString('hex'));
        });      
    })
}
createSalt();


// createHash 매개변수로 salt를 받고
const createHash = (upw, salt) => {
    // 매개변수로
    // 1. 비밀번호
    // 2. 솔트 값
    // 3. 키 스트레칭 횟수
    // 4. 사용하는 해시 알고리즘
    // 5. 콜백함수
    const data = crypto.pbkdf2Sync(
        upw,
        salt,
        100000, // 해시 연산을 몇번 반복할지
        32,
        "sha256"
    )
    // console.log(data.toString('hex'));
    return data.toString('hex');
}

// 암호화된 값을 비밀번호 저장해서 사용하는게 솔트와 키 스트레칭 기법을
// 사용한 해시 문자열을 저장해서 비밀번호로 사용

// express mysql2 ejs 

// express 가져오고
const express = require('express');
const { connect } = require('http2');

// 함수를 호출해서 환경변수의 값을 전달
require("dotenv").config()
// mysql2/Promise 를 가져온다. 
const mysql = require('mysql2/promise');
const path = require('path');
// 서버 객체 생성
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use("/public", express.static(path.join(__dirname, "public")));

// createConnection : 요청 쿼리를 테스트 하는 객체를 만드는 메서드
// createPool : 다수의 유저가 쿼리를 요청해도 풀을 생성해서 속도가 유지되게 최적화를 시킨 메서드

// 환경변수 생성을 한뒤에
// dotenv 라이브러리에서 .env의 값을 읽어서 안에있는 내용을 문자열을 잘라서
// 환경변수의 이름과 값을 프로새스가 종료되면 환경변수에서 제거된다.
// 값을 가져와서 사용
// process os의 내용이 포함된 객체
// env의 키의 값으로 들어있다. 환경변수는
console.log("환경변수의 user :", process.env.DATABASE_USER);
console.log("환경변수의 Password :", process.env.DATABASE_PASSWORD);
console.log("환경변수의 HOST :", process.env.DATABASE_HOST);
console.log("환경변수의 PORT :", process.env.DATABASE_PORT);

const ConnectPool  = mysql.createPool({
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : "project",
    multipleStatements : true,
    host : process.env.DATABASE_HOST,
    port : process.env.DATABASE_PORT
}) 

// 커넥션 확인
ConnectPool.getConnection((err) => {
    console.log(err);
})

// 테이블이 없으면 생성, 있으면 그냥 유지
// 테이블 초기화 
const userTableInit = async () => {
    try {
        console.log("테이블 확인중..")
        // ConnectPool 객체의 쿼리로 접근
        // 비동기 처리 로직 Promise로 실행하지 않아서 에러 핸들러가 발생하지 않음
        await ConnectPool.query('SELECT * FROM users');
    } catch (err) {
        // 에러가 발생하면 테이블이 없다는 의미
        // 테이블 생성
        console.log("테이블이 없어서 생성중..")
        await ConnectPool.query('CREATE TABLE users(id INT AUTO_INCREMENT PRIMARY KEY, uid VARCHAR(10), upw VARCHAR(128), salt VARCHAR(128))')
    }
}
userTableInit();

// 메인 페이지 GET 요청
app.get('/', (req, res) => {
    res.render('main');
})

// 회원 가입 페이지 GET 요청
app.get('/signup', (req, res) => {
    res.render('signup');

});

// 로그인 페이지 GET 요청
app.get('/login', (req, res) => {
    res.render('login');

})

// 회원가입 페이지 POST 요청
app.post('/signup', async (req, res) => {
    try {
        const {uid , upw} = req.body;
        // console.log(upw)
        const salt = await createSalt(); // 암호화 하기 위한 salt 값
        // console.log(salt)
        const pwHash = createHash(upw, salt);
        // console.log(pwHash)
        const [[data]] =  await ConnectPool.query('SELECT * FROM users WHERE uid=?', [uid]);
        console.log(data);
        if(data) return res.json({state : 400, message : "회원가입 실패!!!"});
        await ConnectPool.query('INSERT INTO users (uid, upw, salt) VALUES(?, ? , ? )', [uid, pwHash, salt]);
        res.json({state : 200, message : "회원가입 완료!!"});    
    } catch (error) { 
        console.log(error)
        res.json({state : 500, message : "서버 에러"});
        
    }
})

// 로그인 POST 요청이 들어오면 로그인이 되도록
app.post("/login", async (req, res) =>{
    try {
        const {uid, upw} = req.body;
        const [[data]] =  await ConnectPool.query('SELECT * FROM users WHERE uid=?', [uid]);
        // 아이디 검사
        if(!data) return res.json({state : 401, message : "아이디가 존재하지 않음"})
        // 비밀번호 검사
        // createHash(upw, data.salt);
        const pwHash = createHash(upw, data.salt);
        if(pwHash === data.upw){
            // 응답 메세지를 만드는 객체
            // 헤더에 쿠키의 추가 내용을 작성
            // set-cookie
            // JMT
            // 호스트가 같아서 되는데
            // 호스트가 다를경우 크리덴셜 속성을 호스트가 다르고
            // 자바스크립트 즉 axios 요청을 보내는 경우
            // cors에러가 발생, 크리덴셜 속성이 있어야한다.
            res.cookie("login-token", data.uid, {
                maxAge : 10 * 60 * 60 * 1000,
                httpOnly : true // 요청과 응답간의 사용할 수 있는 쿠키데이터, 자바스크립트에서 접근 불가능하다.
            })
            res.json({state : 200, message : "로그인 성공"})
        } else{
            res.json({state : 402, message : "비밀번호가 틀렸습니다"});
        }
    } catch (error) {
        res.json({state : 500, message : error})
    }
} )

const loginCookieParser = (req, res, next) => {
    console.log(req.headers.cookie);
    if(!req.headers.cookie) return res.redirect('/login');
    const cookie = req.headers.cookie.split('=')[1];
    req.cookie = cookie;
    next();
}

app.get('/mypage', loginCookieParser, (req, res) => {
    res.render('mypage', {username : req.cookie});    
})


app.listen(3000,()=> {
    console.log("서버 작동중...")
})


