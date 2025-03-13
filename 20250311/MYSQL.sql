-- Active: 1741659535182@@127.0.0.1@3306@suhodata

show TABLES;

drop TABLE user;

create Table user(
    id  INT AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(10),
    user_pw VARCHAR(10) NOT NULL,
    user_name VARCHAR(10) NOT NULL,
    create_At DATETIME DEFAULT now()
);

show TABLES;

drop TABLE user;
DESC user;

INSERT INTO user(user_id, user_pw, user_name) VALUES ("suho1", "admin123", "이수호");
INSERT INTO user(user_id, user_pw, user_name) VALUES ("suho2", "admin123", "이수호");
INSERT INTO user(user_id, user_pw, user_name) VALUES ("suho3", "admin123", "이수호");
INSERT INTO user(user_id, user_pw, user_name) VALUES ("suho4", "admin123", "이수호");
INSERT INTO user(user_id, user_pw, user_name) VALUES ("suho5", "admin123", "이수호");

SELECT * FROM user;
SELECT * FROM users;

# 문자열이 S로 시작하는지 
SELECT * FROM user WHERE user_id LIKE 'S%';

# 끝에 문자열이 S로 끝나는지
SELECT * FROM user WHERE user_id LIKE '%S';


-- 테이블의 이름을 ALTER로 (DDL 언어로) 변경
ALTER TABLE user RENAME users;

-- 컬럼의 이름과 데이터 타입을 잘못 생성한 경우
ALTER TABLE user CHANGE user_name name VARCHAR(20);

-- 필드의 데이터 타입만 변경하고 싶다
ALTER TABLE users MODIFY name VARCHAR(30);

-- 필드를 제거하고 싶다
ALTER TABLE users DROP name;

-- 필드를 추가
ALTER TABLE users ADD name VARCHAR(10);

-- 필드 추가를 맨 앞에 추가하고 싶다.
ALTER TABLE users ADD name VARCHAR(10) first;

ALTER TABLE users ADD name VARCHAR(10);

# myid : 새로 만드는 유저의 이름
# localhost : 새로 생성하는 유저가 커넥션 요청할 수 있는 호스트
CREATE USER 'myid'@'localhost' IDENTIFIED BY 'admin123!';

## 모든 호스트에서 접속
CREATE USER 'myid'@'%' IDENTIFIED BY 'admin123!';
## IDENTIFIED BY 뒤에 admin123! 비밀번호

## 유저에게 데이터베이스 권한 부여
GRANT ALL PRIVILEGES ON project.* TO 'myid'@'localhost';
## ALL PRIVILEGES : 이건 모든 쿼리 접근을 허용하겠다.
## SELECT 나 INSERT 등 권한을 명시해서 사용하게 할 수도 있다.

## 권한 리프레시 적용
FLUSH PRIVILEGES;

## 권한 확인
SHOW GRANT FOR 'myid'@'localhost';

## 권한 철회
REVOKE ALL PRIVILEGES ON suhodata.* FROM 'myid'@'localhost';
REVOKE ALL PRIVILEGES ON *.* FROM 'myid'@'localhost';

## 유저 삭제
DROP USER 'myid'@'localhost';

### 유저 목록 조회

SELECT user, host FROM mysql.user;

### FROM이 어디에서 값을 조회할거냐?
### use mysql;
### user라는 테이블 접근

