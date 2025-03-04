const express = require('express');

// 서버 객체 생성
// 서버 상태가 들어있는 객체
const app = express();

// 임시 데이터베이스
// 서버에 데이터가 저장된다
// 서버측에서 응답한 페이지를 보여줘야 한다.
// 서버를 끄면 사용하던 데이터, 변수들이 제거
const data = []; 

app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "page"));
// console.log(app);

// body의 파싱 내용을 추가, 미들웨어로 추가
// use 메서드는 상관없이 미들웨어 호출
// 가장 위에서 호출을 시키기 위해 위에 배치
// GET, POST 상관없이 요청 경로만 확인
// 경로를 전달하지 않으면 모든 경로

// url의 문자열 형태를 객체로 파싱하는 기능을 하는 함수를 반환
// 깊은 객체란  {name : {age : {} } }
// 문자열에서 깊은 객체도 포함해서 파싱을 할것인지? 아닌지?
// extended : false -> 기본적으로 사용 안함, 사용해야될 경우는 true로 주면 된다.

// app.use((req, res, next) => {
//     // body 라는 키를 추가하면서 next를 전달
//     req.body = "문자열을 파싱해서 객체의 내용을 추가"
//     next();
// })

app.use(express.urlencoded({extended : false}))

// 특정 미들웨어에만 추가
app.use("/mypage", (req, res, next) => {
    req.cookies
    // 로그인이 되어있으면 next 로 넘긴다
    if(req.cookies) {
        next();
    } else {
        res.redirect('/login');
    }
})

app.use("/mypage", (req, res) => {
    res.render('mypage');
   
})



// GET /HTTP/1.1
app.get('/', (req, res) => {
    // render(파일의 이름, 전달하는 데이터 객체)
    // 기본으로 설정되어 있는 경로
    // views의 key의 value인 경로에 접근해서 파일을 찾는다.
    // 'C:\\Users\\akak7\\OneDrive - 인덕대학교\\바탕 화면\\NodeFile\\20250227\\views
    // app.set("view engine", "ejs"); -> 엔진을 사용하게 되면
    // 확장자를 사용하는 엔진의 파일 확장자명을 찾는다.
    // 페이지를 완성할때 참조할 수 있는  값을 전달
    // 서버에서 페이지를 완성할때 필요한 값, 즉 페이지를 완성시킨다 서버에서.

/*
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        soon
        메인 페이지
    </body>
    </html>
*/

    res.render("index", { name : "Suho", count : 5, board : data});
})

app.get('/detail', (req, res) => {
    console.log(req.query.index); // 인덱스 0번 접근
    const _data = data[req.query.index];
    // {index : 1 , title : 121341, content: 123123}
    res.render("detail", _data);
})


app.get('/update', (req, res) => {
    console.log(req.query.index);
    const index = req.query.index;
    res.render("update", { index : index, title : data[index].title , content : data[index].content })
})



// 업데이트 페이지 요청 부분
app.post('/update', (req, res) => {
    const _update = req.body.index;  // POST 요청에서는 body로 값을 받음
    console.log("요청한 body의 인덱스", _update);
    
 
    data[_update].title = req.body.title;
    data[_update].content = req.body.content;
    
    // 수정된 데이터 확인
    console.log("수정된 데이터", data[_update]);

    // 브라우저에게 응답을 보낸다.
    res.redirect('/');
});


app.get('/delete', (req, res) => {
    const  index = req.query.index;
    console.log("선택된 query 인덱스: ",index);
    
    // data 배열에서 splice 메서드를 사용하여 인덱스에서 제거
    data.splice(index, 1);
    // 삭제된 데이터 확인
    console.log("삭제후 데이터",data);

    res.redirect('/');
})


// POST / HTTP/1.1
// POST body의 내용을 요청 메세지에서 사용할 수 있다.
// POST는 안전하게 값을 전달해서 값을 요청 메세지로 전달해서
// 서버로직에서 변환해서 사용
// POSTMAN : API를 테스트할때 사용, 프론트에서 구현이 되지않은 상태에서
// 백엔드 개발자가 요청을 보내서 데이터를 확인할 때 test로 사용
// redirect() === 300 번대의 상태코드를 반환
// 브라우저에서 서버로 요청을 보내고, 받은 응답은? 야 다시 여기로 재요청 보내
// 브라우저는 두번을 요청하게 된다.
// /board로 POST 요청을 보내고, 받은 응답은 redirect로 "/" 경로로 get 요청을 보내
// 브라우저는 "/" 경로로 get 요청을 보낸다.

app.post("/board", (req, res) => {
    // Create
    // body 내용을 가져와서 데이터를 추가해주고 싶어
    // body 내용을 서버측에서 받아야한다
    // req 요청 메세지를 파싱할 때 body의 내용을  추가
    console.log(req.body.title);
    console.log(req.body.content);
    // 임시 데이터 베이스에 기록
    data.push({index : data.length + 1 , title : req.body.title, content : req.body.content})
    res.redirect("/") // 재요청 보낸다.
})



app.listen(3000, () => {
    console.log("서버 작동중");
})