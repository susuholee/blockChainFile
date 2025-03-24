CREATE TABLE users (
    name VARCHAR(10),
    age INT
)

-- users의 테이블에 데이터가 10만개 등등 무척많다고 가정하면
-- full scan 전체의 값을 조회한다. 전체를 순회하기 때문에 속도가 저하된다.

-- 인덱스 생성
CREATE index idx_users_age ON users(age);

Show index From users;

## mysql의 외부 CSV 파일은 지정된 접근 경로에 있는 파일을 업로드 할 수 있다.

show GLOBAL VARIABLES LIKE "local_infile";

SET GLOBAL local_infile=ON;

show VARIABLES LIKE "secure_file_priv";


CREATE TABLE student(id INT PRIMARY KEY, name VARCHAR(50), email VARCHAR(50),
age INT, class VARCHAR(20));

DROP TABLE student;



LOAD DATA  INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/student.csv'
INTO TABLE student
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

SELECT * FROM student;
## 전체를 조회하는 쿼리
## id 기본키를 가지고 조회가 일어나는 것
## index가 되어 있다면, 전체 조회할때 데이터를 좀 더 빠르게 조회할 수 있다.
## index를 사용하는 목적은 조건에 맞는 데이터를 빠르게 조회하기 위해서

EXPLAIN SELECT * FROM student WHERE class="blockchain";

## 데이터의 값이 많고 조회를 할때 인덱싱이 되어있지 않으면 조회의 속도가 느리다.
## 조회하는 값이 숫자가 아니고, 문자는 사전적 순서로 정렬후 btree로 조회한다.
SELECT * FROM student WHERE name="Alisha99";

CREATE index idx_student_name ON student(name);
CREATE index idx_student_email ON student(email);
DROP index idx_student_email ON student(email);

## 인덱스 생성하고 확인
show index from student;

drop index idx_student_name ON student;
drop index idx_student_email ON student;

SELECT * FROM student WHERE email="Mac.Mueller68@hotmail.com";

## 인덱스 커버링
### EXPLAIN : 조회할때 사용한 인덱스의 값이 무엇인지
EXPLAIN SELECT * FROM student WHERE name="Vladimir18" AND email="Hillard_Friesen@hotmail.com";

## 인덱스를 설정한다는 것이 즉, 테이블의 데이터의 영역에 인덱스의 내용도 저장이 된다는 얘기
## 인덱스를 설정하면 추가적인 데이터도 저장이 된다.
## 데이터가 추가되면 인덱스의 정보도 모두 다 갱신한다.
## 그래서 즉, 데이터 추가부분이 오버헤드 된다.
## 꼭 필요한 인덱스만 사용을 해야한다.

### 멀티 컬럼 인덱스
### 두 가지 이상의 컬럼으로 유니크 인덱스 생성

CREATE UNIQUE index idx_student_name_email ON student (name, email);
## 왼쪽 기준으로 선택한 인덱스의 기준으로 인덱싱 된다.

## email은 따로 인덱스가 필요하다. 

CREATE index idx_student_email ON student(email);

## Mysql에서 옵티마이저 sql을 실행할 때 가장 효율적으로 실행할 수 있는 방법을 결정
## 옵티마이저가 오류를 발생시킬수도 있을 경우가 있기 때문에 확인을 잘 해보고 사용해야한다.
## 이상한 인덱스를 사용하고 있는 경우

### Mysql에서 옵티마이저에게 인덱스를 제시
### use index(idx_student_email) : 왠만하면 이 인덱스를 사용해라.
SELECT * FROM student use index(idx_student_email)WHERE email="Hillard_Friesen@hotmail.com";

### 효율적이지 않은데 말을 안듣는다. 
### 강제로 인덱스 사용을 하게할 수 있다.
SELECT * FROM student FORCE index(idx_student_email) WHERE email="Hillard_Friesen@hotmail.com";