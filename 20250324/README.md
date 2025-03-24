# ORM (Object-relational mapping) 시퀄라이즈

## ORM 객체 지항 프로그래밍
> OOP에서 사용되는 객체의 프로그래밍을 관계형 데이터베이스의 테이블과 매핑해서 이전에 SQL을 작성하는것을 하지않고 데이터베이스와 상호작용을 할수 있다
> 객체를 전달하면 우리가 원하는 형태의 SQL을 작성해서 데이터베이스와 상호작용할 수 있다.
> 필드 즉 엔티티를 정의할때 객체의 형태 필드에 저장하는 데이터의 형태를 객체로 매핑하면 좀더 데이터의 관리의 가독성이 높아진다.

## ORM이 생긴 이유
> 객체와 관계형 데이터를 다룰때 불일치를 해결하기 위해서 탄생
> 처음에는 SQL을 자동 생성하고 실행하는 간단한 내용으로 탄생
> 이후 점점 스키마와 객체의 모델을 매핑하는 기술로 점점 발전했다.
> 데이터베이스를 다룰때 SQL을 직접 작성하지 않고 개발 생산성과 가독성을 높이기위해서 사용된다.

## ORM의 기능
1. 객체와 데이터베이스의 테이블 매핑 : 테이블간의 매핑을 객체로 만들어서 데이터베이스와 상호작용을 할 수 있게 매핑
2. 자동 SQL 작성 : CRUD의 SQL을 작성해서 상호작용해준다.

## 시퀄라이즈
> ORM 중 하나이고 객체와 데이터베이스를 매핑을 도와준다.
> 자바스크립트 구문으로 객체를 메서드의 매개변수로 전달하게되면 sql의 작성을 해서 데이터베이스를 제어할수 있도록 도와준다.

### 시퀄라이즈 문법
```sh
npm i sequelize mysql2
# sequelize 단순히 데이터베이스에 객체를 전달하면 SQL을 작성해서 상호작용해주는 역활을 해주는거고
# mysql2는 내부적인 드라이버 역활을 한다. 
```

```js
const { Sequelize } = require('sequelize');
// 연결 속성을 가지고 있는 객체
// Sequelize 매개변수로 {} 속성을 전달하지 않고
// 매개변수의 순서 첫번째 데이터베이스 이름
// 매개변수 두번째 사용자 계정 이름
// 매개변수 세번째 사용자 계정 비밀번호
// 매개변수 네번째 객체의 값으로 호스트와 데이터베이스 종류
    const sequelize = new Sequelize(
        'project',
        'myid',
        'admin123!',
        {
            host : 'localhost',
            dialect : 'mysql'
        }
    )
// 커넥션 요청을 할 객체

// 동기화및 커넥션 요청
// 동기화 당시 테이블의 값을 모두 제거하고 새로 생성할건지 속성정의를 force 키의 값으로 전달 true가 초기화 삭제 false 초기화 X
sequelize.sync({ force : false }).then(() => {
    console.log("데이터베이스 동기화 됬다.")
}) 
```

### 시퀄라이즈 모델 생성
> 모델은 테이블의 동기화를 위해 엔티티 필드와 테이블의 속성을 객체로 정의하고 
> ORM SQL을 생성해서 동기화 시켜준다.
> create table users(id INT auto_increment primary key, name varchar(20) NOT NULL);

```js
// enum 값을 사용해서 타입 정의
const increment = "INCREMENT";// 상수를 정의해서 사용한다.
// 사람이 실수할수 있는 문자열 입력 방식을 방지할수 있다.

// 시퀄라이즈에서 제공하는 데이터 타입을 가지고 사용
const { DataTypes } = require('sequelize');
// DataTypes 시퀄라이즈에서 사용하는 데이터 타입이 정의되어있다.

// 일반적인 엔티티 모델 생성 형태
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
        tableName : "users",
        indexes : [
            {
                unique : true,
                fileds : ['name']
            }
        ]
    }
) // 엔티티 객체 생성

// 클래스 init 메서드 호출 형태 확장성이 더 좋다.(대규모 프로젝트시)

const { Model, DataTypes } = require("sequeluze");

// 모델은 결국 엔티티 생성 class
// 대규모 프로젝트를 진행할때는 class 형이 확장성과 유지보수가 좋을수 있다.
// Model init 메서드는 생성자 함수
// 테이블 객체를 만든다.
// const user = new User();//  { }

class User extends Model {
    // 매개변수 이름을 sequelize로 한 이유는 커넥션 객체를 전달할 매개변수로 정했기때문에
    static init (sequelize) {
        // 테이블 객체 생성
        // 테이블과 매핑된 객체를 반환 create update delete findOne findAll 이런 메서드를 가지고 있는 객체
        // 테이블을 생성할때 속성을 가지고 생성 하고 매핑을 속성에 맞는 쿼리문작성을 할수 있는 메서드가 포함되어있는 객체 반환
        // super.init은 테이블을 생성하고 매핑한 테이블을 반환하는 메서드
        return super.init({
            // 테이블 필드
            name : {
                type : DataTypes.STRING(20), // 문자열 20자리
                primaryKey : true,           // 하나의 테이블에 한개만 존재할수 있는 기본키
            },
            nick : {
                type : DataTypes.STRING(20),
                unique : true                // 유니크 속성 중복이 되지않는 필드
            }
            createAt : {
                type : DataTypes.DATE,
            }
        }, {
            // 테이블 속성
            // createAt이 자동으로 생성될지 말지.
            // 대소문자 허용할건지. 스네이크 표현
            // 인코딩 방식
            sequelize,
            timestamps : false,
            // 생성 시간과 수정 시간을 추가할지 말지.
            // 표기법을 바꿔주는 속성
            // 스네이크 표기법으로 사용할건지.
            // createdAt -> created_at   updatedAt -> updated_at 예를 들어서 
            underscored : false,
            modelName : 'User', // 모델의 이름을 정의한다.시퀄라이즈에서 사용하는 모델의 이름 JOIN으로 호출할때나 관걔형 포현할때
            tableName : 'users', // 실제로 데이터베이스에 생성될 테이블의 이름
            paranoid : false, // 삭제시간을 남길건지 deleteAt이 필드로 생성된다. 삭제 시간을 남기고 로그를 기록할때
            charset : "utf8mb4", // utf8 인코딩 mb4 4바이트를 사용해서 모든 유니코드 문자를 저장할수 있는 인코딩 방식
            collate : "utf8mb4_general_ci" // 문자의 규칙 정렬 규칙 general_ci 대소문자 구분없이 문자를 정렬하는 규칙을 정한것.
        })
    }
    // 테이블의 관계형을 정의할 메서드
    // 테이블 생성 이후에 호출할 메서드
    // models 생성한 테이블 매핑 객체 {Users, Posts}
    static associate(models) {
        // 테이블의 관계성을 정의하는 메서드
        // hasMany => 1 : n 관계의 자식 정의
        // hasOne => 1:1 관계의 자식으로 정의

        // Users 테이블의 관계성 정의 Users => Posts 부모테이블 자식테이블 
        // 외래키를 user_name으로 추가를하고 posts는 users의 name의 필드의 데이터가 있으면 데이터를 추가할수 있다.
        // 데이터가 지워지는 속성을 정의 부모테이블의 기준으로 자식 테이블의 관계성 키가 기본키가 포함되면 연관성이 
        // 자식 테이블도 제거 자동으로 제거되는 속성 on delete cascade
        // cascade 속성은 부모테이블의 값이 제거되면 자식 테이블의 데이터 제거
        models.Users.hasMany(models.Posts, { foreingKey : "user_name", sourceKey : "name", onDelete : "CASCADE" })
    }
}


//// POSTS
class Posts extends Model {
    static init (sequelize) {
        return super.init({
            content : {
                type : DataType.STRING(100),
                allowNull : false
            }
        }, {
            sequelize,
            timestamps : false,
            underscored : false,
            modelName : 'Post',
            tableName : 'posts',
            paranoid : false,
            charset : "utf8mb4",
            collate : "utf8mb4_general_ci"
        })
    }
    static associate(models) {
        // users의 자식 테이블
        // belongsTo 관계성의 정의를 받는 메서드 부모와의 관계성을 정의하는 메서드
        models.Posts.belongsTo(models.Users, { foreingKey : "user_name", target : "name" });
    }
}


```


