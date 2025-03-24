const { Sequelize, DataTypes, Model } = require('sequelize');
const mysql2 = require('mysql2/promise');
require('dotenv').config();

const connectPool = mysql2.createPool({
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME,
    host : process.env.DATABASE_HOST,
    port : 3306,
    multipleStatements : true
})

const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host : process.env.DATABASE_HOST,
        dialect : "mysql"
    }
)

const User = sequelize.define(
    'User', // 모델 이름 관계형을 맺을때 사용
    {       // 정의할 필드명, 데이터 타입
        id : {
            type : DataTypes.INTEGER, // 숫자 타입으로 정의
            autoIncrement : true,     // 자동으로 증가하는 속성 정의
            primaryKey : true         // 기본키로 지정하는 속성
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false         // null 의 값이 되면안된다 NOT NUll
        }
    }, {
        // 테이블 속성
        tableName : "users"
    }
)
// User 변수에는 테이블 매핑 객체
// User의 객체의 메서드를 사용해서 쿼리요청을 보낼수 있다.

sequelize.sync({ force : false }).then(async () => {
    console.log("데이터베이스 동기화")
    // 데이터 생성
    // insert into users (name) values ("soon")
    // const data = await User.create({name : "soon3"});
    // console.log(data.toJSON());
    // 생성된 데이터 내용 확인

    // 데이터 조회
    const data2 = (await User.findAll()).map(e => e.dataValues);
    console.log(data2);
    // select * from users WHERE id=1;
    // const data3 = await User.findOne({where : {id : 2, name : 'soon2'} });
    // console.log(data3);

    // 데이터 수정
    // updata users SET name="soon123" where id=2;
    // updata users SET name="soon123" where id=2 AND soon2;
    // const data4 = await User.update({name : "soon123"}, { where : {id : 2, name : soon2}});
    // // 반환값으로 수정된 내용이 할당되진 않는다.
    // // 반환되는 내용은 수정된 행의 갯수나 내용들
    // console.log(data4);

    // 데이터 삭제
    // delete from users where id=2;
    // const data5 = await User.destroy({where : {id : 2}});
    // console.log(data5) // 삭제된 데이터의 갯수
    // 정렬을 해야하는 데이터
    // ORM의 단점 복잡한 쿼리까지는 제공하지 않는다.
    // 복잡한 쿼리는 우리가 직접 쿼리문을 작성해서 사용해야한다.

    const createORM = (obj) => {
        let query = 'insert into users';
        //  (name, id, age) values ("soon", 1, 2);
        let queryFiled = "("
        let values = "("
        for (const key in obj) {
            queryFiled += key + ",";
            if(typeof obj[key] === 'number'){
                values += obj[key] + ",";
            }else if (typeof obj[key] === 'string') {
                values += `"${obj[key]}"` + ",";
            }
        }
        console.log(queryFiled.length);
        const data = queryFiled.slice(0, -1);
        const valueData = values.slice(0, -1);
        // 맨뒤에서 문자열 하나 잘라서 data에 할당
        // 시작 인덱스를 0으로 잡고
        // 마지막 문자열을 -1로 전달하면 마지막 문자열 한개 제외하고 메서드에서 값 반환
        queryFiled = data + `, createdAt, updatedAt)`;
        // 문자열 포멧해서
        values = valueData + `, "2025-03-24 11:58:00", "2025-03-24 11:58:00")`;

        console.log(queryFiled);
        console.log(values);
        const queryResult = `${query} ${queryFiled} VALUES ${values}`;
        console.log(queryResult);
        connectPool.query(queryResult);
    }
    createORM({name : "soon456"});
    
    // 순서를 맞춰야하는 데이터는 DELETE 할때 인덱스 정렬하고 AUTO INCREMENT 0으로 속성 초기화 하면 된다.
    // 일반 쿼리 사용
    // sequelize.query("create table boards(title VARCAHR(20), content VARCHAR(200));");
}).catch((err) => {
    console.log(err);
})


class Square {
    constructor (_shape) {
        this.shape = _shape;
    }

    say(name, shape) {
        console.log(name, shape);
    }
}

class Box extends Square {
    constructor (_name, _shape) {
        // super는 부모 생성자를 호출하는 함수
        //  super(_shape); // 부모 생성자 호출
        //  super 부모 생성자 호출 이후에 부모의 함수 say함수 호출
        // super 상속받은 부모의 생성자 함수나  부모의 함수를 자식 클래스의 생성자함수에서 호출할수 있다.
        super.say("안녕", "오랜만이야")
        console.log(this);
        this.name = _name;
    }

    // say() {
    //     console.log(this.name, this.shape)
    // }
}

const box = new Box("쿠팡 박스", "사각형");
box.say();

// 오버라이딩 오버로딩