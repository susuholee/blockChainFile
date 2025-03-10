## testsql 이라는 데이터베이스 서용
use testsql;

## 데이터베이스 조회
show databases;

## test 라는 테이블을 생성하고 id,name, age, phone_number라는 필드명을 생성
## 각각의 타입은 id는 int, name VARCHAR, age VARCHAR, phone_number VARCHAR 타입을 정의
## id 필드에는 AUTO_INCREMENT, 숫자가 자동으로 증가하는 옵션과 PRIMARY KEY 라는 고유의 값을 가지도록 설정
CREATE TABLE test(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    age  VARCHAR(10) NOT NULL,
    phone_number VARCHAR(30)
);

## 모든 테이블 조회
show TABLES;

## test 테이블의 필드명 확인
DESC test;

## test 테이블의 값을 추가
INSERT INTO test(name, age, phone_number) VALUES ("몰라", "22", "010-1234-2345");


## test 테이블의 필드값 모두 조회;
SELECT * FROM test;

## name 필드값이 "홍길동" 일때 해당하는 age 필드의 값을 조회
SELECT age FROM test WHERE name = "홍길동"; 

## age 필드값이 22 일때 해당하는 name 필드의 값을 조회
SELECT name FROM test WHERE age="22";

## Update
## test 테이블에서 id가 4행인 필드의 name을 "수호"로 변경 age의 값도 25로 수정
UPDATE test SET name="수호", age="25" WHERE id=4;

## DELETE 
## test 테이블에서 id가 3인 필드를 삭제
DELETE FROM test WHERE id=3;

