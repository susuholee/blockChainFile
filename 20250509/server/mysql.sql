-- Active: 1746758108185@@127.0.0.1@3306@todo

# 테이블 이름 board
## 필드 id, name

CREATE TABLE board (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(50) NOT NULL);

DROP TABLE board;
DESC board;

INSERT INTO board (name) VALUES ("점심먹기");

SELECT * From board