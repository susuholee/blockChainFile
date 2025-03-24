CREATE TABLE singer (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(20),
    gender VARCHAR(30)
)


CREATE TABLE song (
    songname VARCHAR(100),
    genre VARCHAR(25),
    release_date DATE,
    singer_id INT
)

SHOW TABLES;

DROP TABLE singer, song;


## 가수 정보 추가
INSERT INTO singer (name, gender) VALUES("아이유", "여자");

## 곡 정보 추가
INSERT INTO song VALUES("좋은날", "발라드", '2025-03-19', 1);

SELECT * FROM singer; 
SELECT * FROM song; 

SELECT singer.name, singer.gender, song.songname, song.genre, song.release_date
FROM song
INNER JOIN singer ON song.singer_id = singer.id;


SELECT singer.name, singer.gender, song.songname, song.genre, song.release_date
FROM singer
LEFT JOIN song ON singer.id = song.singer_id;

SELECT singer.name, singer.gender, song.songname, song.genre, song.release_date
FROM singer
RIGHT JOIN song ON singer.id = song.singer_id;

