const Sequelize = require('sequelize');
const User = require('./user');
const Post = require('./post');
const Category = require('./category');

const sequelize = new Sequelize(
    process.env.DATABASE_NAME, // 사용할 데이터 베이스 이름
    process.env.DATABASE_USER, // 사용할 데이터 베이스 계정
    process.env.DATABASE_PASSWORD, // 사용할 데이터 베이스 비번
    { // 사용할 데이터베이스의 속성
        host : process.env.DATABASE_HOST,
        dialect : "mysql",
        port : process.env.DATABASE_PORT // 306
    }
);

// sequelize 연결속성을 포함하고 있는 객체
// 테이블 생성 준비 
const users = User.init(sequelize); 
const posts = Post.init(sequelize);
const categorys = Category.init(sequelize);

const db = { 
    User : users,
    Post : posts,
    Category : categorys,
    sequelize
}

users.associate(db);
categorys.associate(db);
posts.associate(db);

// 커넥션 맺는 메서드 sync
// force : 테이블 초기화 할지 말지 => 테이블을 삭제했다가 다시 생성 할지 말지.
sequelize.sync({ force : true}).then(() => {
    console.log("시퀄라이즈 온~");
}).catch(console.log)

module.exports = db;