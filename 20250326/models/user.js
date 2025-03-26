// 테이블 매핑 객체

const { Model , DataTypes } = require('sequelize') // sequelize 안에서 Model 클래스 가져오기

// User 클래스를 Model 클래스에서 상속을 받는다
class User extends Model {
    static init(sequelize) {
        // 테이블 매핑 객체를 생성하는 생성자 함수 호출, 부모클래스에서
        // insert into user (uid VARCHAR(20) primary key, upw VARCHAR(200) NOT NULL, name VARCHAR(10) NOT NULL, grade INT NOT NULL)
        return super.init({
            // 첫 번째 객체는 필드의 내용, 데이터 타입
            uid : {
                type : DataTypes.STRING(20),
                primaryKey : true
            },
            upw: {
                type : DataTypes.STRING(200),
                allowNull : false // NOT NULL
            },
            name : {
                type: DataTypes.STRING(10),
                allowNull : false // NOT NULL
            },
            grade : {
                type: DataTypes.INTEGER,
                defaultValue : 1,  // 1은 유저, 2는 어드민
                allowNull : false
            }
        }, {
            sequelize,
            timestamps : true, // createAt (생성 시간),  updatedAt (수정 시간) 사용할지 말지
            underscored : false, // 대소문자 사용할지 말지, create_at(카멜 표기법)
            modelName : "User",
            tableName : "users",  // 실제 테이블 이름
            paranoid : false, // 삭제 시간 추가, true 면 deletedAt(삭제 시간) 추가
            charset : "utf8mb4",
            collate :  'utf8mb4_general_ci'
        }); // 테이블의 속성과 필드명과 필드 속성
    }
    static associate (models) {
        models.User.hasMany(models.Post, {foreignKey : "user_id", sourceKey : "uid"});
        models.User.hasMany(models.Category, {foreignKey : "user_id", sourceKey : "uid"});
    }
}

module.exports = User; // 상속받은 유저 클래스 모듈로 내보낸다.