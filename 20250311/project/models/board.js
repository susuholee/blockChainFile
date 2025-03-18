// mysql2 모듈 가져온다
const mysql2 = require('mysql2');

// 커넥션 맺기
const mysqlConnect = mysql2.createConnection({
    user : "myid",
    password : "admin123!",
    multipleStatements : true,
    database : "project",
    host: "localhost",
    port : 3306
})

mysqlConnect.query("SELECT * FROM board", (err, data) => {
    if(err) {
        console.log("테이블이 없어");
        // 테이블 생성
        const sql = 'CREATE TABLE board(id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(20) NOT NULL, content VARCHAR(300) NOT NULL)'
        // query문 실행하고 sql문 실행
        mysqlConnect.query(sql, (err) => {
            if(err) return console.log(err);
            console.log("테이블이 없어서 테이블을 생성했어")
        });
    } else {
        console.log("테이블이 초기화 되어 있어")
    }
})

exports.createBoardData =  async (title, content) => {
    // title, content 필드의 값 추가
  return await new Promise((res, rej) => {
    // 글 추가 될때까지 대기한다.
       mysqlConnect.query(`INSERT INTO board(title, content) VALUES ('${title}', '${content}')`, (err) => {
        if(err) return rej(err);
            res("글 추가 완료");
       })        
    })
}

// Board의 데이터를 가져오는 메서드
exports.getBoardData = async () => {
   return await new Promise((res, rej) => {
        mysqlConnect.query("SELECT * FROM board ", (err, data) => {
            if(err) return rej(err);
            res(data);
        })
    })
}




// Board의 데이터를 수정하는 메서드
// title과 content로 매개변수로 전달
exports.updateData = async (title, content, id) => {
    return await new Promise((res, rej) => {
        mysqlConnect.query("UPDATE board SET title=?, content=? WHERE id=?", [title, content, id], (err) =>{
            if(err) return rej(err);
            res("게시글 수정완료")           
        })
    })
}



// DB에서 board 테이블의 해당 삭제 함수
exports.deleteData = async (id) => {
    return new Promise((res, rej) => {
        mysqlConnect.query('DELETE FROM board WHERE id =?', [id], (err) => {
            if (err) return rej(err);
            res("게시글 삭제 완료")
        });
    });
};