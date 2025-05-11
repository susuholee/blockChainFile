const express = require('express');
const cors = require("cors")

// 포트 번호가 다르다, 프론트 3000, 백엔드 4000
const app = express();
// 헤더에 값을 추가하고 next 다음 미들웨어 호출

app.use(cors({
    origin : "*",
}));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.post("/login", (req, res) => {
    const {body} = req;
    console.log(body)
    setTimeout(() => {
        res.json({data : body});
    }, 2000)
})


app.post("/signup", (req, res) => {
    try {
        const {username, email, password } = req.body;
        console.log(username, email, password);
        res.json({message : "회원가입 성공", data : {username, email, password}})
    } catch (error) {
        res.json({error})
    }
})

app.listen(4000, () => {
    console.log("서버 작동중")
})