# 테이블 생성

# 상품 테이블  상품 이름

# 테이블 조회
SHOW TABLES;

# 테이블 생성 (엑셀 파일 하나 생성)
# CREATE TABLE 테이블 이름 ( 필드명 타입 옵션, 필드명 타입 옵션);

# AUTO_INCREMENT : 값을 추가하지 않아도 자동으로 증가 시키는 옵션 (숫자에만)
# 값을 임의로 저장할 수 없다.
# PRIMARY KEY : 기본키, 고유 식별자로 사용할 키 값

# 1 2 3 4 5 6 7 -> 데이터베이스 검색 엔진에서 값을 효율적으로 찾을때 사용한다.
# 인덱싱 중요!! 백엔드 쉬운데 필수 개념
# VARCHAR(10) -> 문자열 10자리 사용하겠다!

# use suhoData; ->  suhoData 라는 사용할 데이터베이스

CREATE TABLE store (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10)
);

### 테이블의 필드명 확인
DESC store;

### 테이블의 값 추가
# INSERT INTO store (name) VALUES ("상품 1") -> store에 '상품1' 이라는 값을  name 필드의 추가한다
INSERT INTO store (name) VALUES ("상품 2");

### 값 조회
## * : 모든 내용에서 찾겠다.
SELECT * FROM store;

### 유저 정보 테이블
## NOT NULL : 값이 Null 값이면 데이터를 저장하지 않겠다.
## DATETIME 날짜 타입을 선언하는데 옵션으로 기본값 설정
## now() : 함수가 SQL문 실행할때 포함되어 있고, now() 년도, 날짜, 시간 분의 현재 시간의 내용을 생성
CREATE TABLE user( id INT AUTO_INCREMENT PRIMARY KEY ,user_id VARCHAR(10) NOT NULL, user_pw VARCHAR(10) NOT NULL, data DATETIME DEFAULT now());

## 테이블 확인
show TABLES;

### Create 값 추가
INSERT INTO user(user_id, user_pw) VALUES ("suho4", "1234");

### 저장된 값 조회 READ
### * 부분
### SELECT 조회할 테이블의 필드명  FROM  테이블 이름

SELECT user_id, user_pw FROM user;
SELECT * FROM user;

### 테이블에 suho2라는 값이 저장되어 있는지 확인하고 있으면 조회
### WHERE 조건문을 사용해서 원하는 값이 포함된 필드의 값을 찾아서 조회
### WHERE 조건문에 같이 사용할 수 있는 옵션 구문 AND와 OR
### AND는 둘다 일치하면 조회
### OR는 둘중 하나만 일치하면 조회
SELECT * FROM user WHERE user_id = "suho2" OR user_pw="123";
SELECT * FROM user WHERE user_id = "suho2" AND user_pw="1234";

### 테이블의 값을 수정 Update
### SET 값을 할당하는 옵션
### WHERE에 고유 식별자를 사용해서 수정을 하면 최적화가 된다.
UPDATE user SET user_pw = "admin123", user_id="suho2" WHERE id =2;


### 테이블 값 삭제
# DELETE FROM user WHERE id=4; -> user에 id가 4번인 값 삭제
DELETE FROM user WHERE id=3;

## user 테이블 삭제
drop TABLE user;

show TABLES;

## 기본키 값이 없다
## 고유식별자가 없다
### 기본키는 고유 식별자 하나의 테이블에 하나의 필드만 존재할 수 있다.
### 유니크 키는 테이블의 여러개의 필드를 생성할 수 있다.
### 조회가 빈번하게 일어나지 않은 테이블은 기본키가 없어 만드는게 더 효율적이다.
### 데이터의 생성이 많이 일어난다. 그럼 기본키를 생성하게 되면 
DESC user;

## 테이블의 쿼리 내용 요약

# 모든 테이블의 조회

SHOW TABLES;

# 데이터베이스 사용
use [데이터베이스 이름];

# 테이블의 필드 확인
DESC [테이블 이름];

# 테이블 필드 값 모두 조회
SELECT * FROM [테이블 이름];

# 테이블의 선택 값 조회
SELECT [필드명, 필드명2] FROM [테이블의 이름];

# 테이블의 값을 조회할때 오름차순 내림차순
# DESC 내림차순
# ASC 오름차순

## DESC 내림차순
SELECT * FROM [테이블 이름] ORDER BY [필드 이름] DESC
## ASC 오름차순
SELECT * FROM [테이블 이름] ORDER BY [필드 이름] ASC

## UPDATE 기본 구조
UPDATE [테이블의 이름] SET [필드명] = [새로운 값], [필드명2] = [새로운 값] WHERE [조건];

## DELETE 기본 구조 
DELETE FROM [테이블의 이름] WHERE [조건];


##----------------------------------- 실습 과제 -------------------- ###

CREATE TABLE users (
    user_name VARCHAR(30) NOT NULL,
    user_id  VARCHAR(20) NOT NULL PRIMARY KEY,
    user_pwd VARCHAR(20) NOT NULL,
    gender VARCHAR(20),
    date DATETIME DEFAULT now()
);

SHOW TABLES;

DESC users;

DROP TABLES users;

INSERT INTO users(user_name, user_id, user_pwd, gender) VALUES ("손흥민", "son", "1234", "남자");

SELECT * FROM users;

SELECT user_name from users WHERE user_id = 'soon';

SELECT user_pwd FROM users WHERE user_id = 'sang';


SELECT * FROM users ORDER BY user_name ASC;

## Update
UPDATE users SET user_pwd = "5678" WHERE user_id = "sang";

## DELETE 
DELETE FROM users WHERE user_name="구다경";

SELECT * FROM  users;

SELECT user_id, user_pwd FROM users;

-- 유저의 회원 정보로 가입했을때 저장할 테이블을 만들어 주세요
-- 테이블의 이름은 users로 해주시고 (O)
-- 저장할 유저의 데이터는 유저 아이디와 비밀번호, 닉네임 , 성별, 생성시간
-- 아이디로 조회를 하면 해당 유저의 비밀번호를 조회해주세요

-- 유저의 아이디는 문자열, 비밀번호는 문자열, 닉네임은 문자열, 성별도 문자열
-- 생성시간 DATE 타입  ( O )
-- 유저의 아이디와 닉네임, 비밀번호는 값이 입력이 안되면 안되고, 성별도 입력이 안되어도 된다. 시간은 입력받지 말고 기본값 설정  ( O )
-- 유저의 아이디는 고유한 식별자로 만들어주세요 -> PRIMARY KEY 전달( O )

