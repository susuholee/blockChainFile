// mysql 모듈을 가져오고
const mysql = require('mysql2');

// mysqlConnect 
// mysql에 커넥션을 맺고 쿼리 요청을 보낼 수 있는
// 가지고 있는 객체를 반환
// 여러개의 값을 전달할 때 객체나 배열 형태로 전달
// 객체가 반환된 mysqlConnect에 저장
const mysqlConnect = mysql.createConnection({
    user : "myid",
    password : 'admin123!',
    database : "suhodata",
    host : "localhost",
    port : 3306,
    multipleStatements : true
});
// multipleStatements : true
// 쿼리문을 잘라서 작업 단위로 다중 쿼리를 실행시켜준다

// query() : 쿼리 요청을 보내는 메서드
mysqlConnect.query("SELECT * FROM user", (err, data) => {
    if(err) return console.log(err);
    console.log(data);
    // 요소 생성
    // // html 부분을 호출하면서 메인페이지를 보여준다
})

const user_id = "suho8";
const user_pw = "1234";
const user_name = "이수호";

// 유저를 추가 (Create)
// mysqlConnect.query("INSERT INTO user (user_id, user_pw, user_name) VALUES(?,?,?)",[user_id, user_pw, user_name],(err, data) =>{
//     if(err) return console.log(err);
//     console.log("글이 추가되었다.");
// })

// 유저 삭제(DELETE)
// const deleteQuery = 'DELETE FROM user WHERE id=?;';
// const setIndexQuery = 'SET @CNT = 0; UPDATE user SET user.id = @CNT:=@CNT+1;'
// const autoIndexResetQuery = "ALTER TABLE user AUTO_INCREMENT = 0;";
// // @CNT변수를 선언하고, user.id에
// // 모든 값을 재할당 1,2,3,4 ...
// const queryAll = deleteQuery + setIndexQuery + autoIndexResetQuery;
// mysqlConnect.query(queryAll, [1], (err)=> {
//     if(err) return console.log(err)
//     console.log("글이 삭제되었어")
// });

// // // 유저 정보 수정 (Update)
// // user에 name, id가 어디에 있는지
// mysqlConnect.query('UPDATE user SET user_name=? WHERE id=?', ["suho232", 1], (err) => {
    //     if(err) return console.log(err);
    //     console.log("수정 완료")
// })