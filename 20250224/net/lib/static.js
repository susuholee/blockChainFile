// 서버에 있는 정적 파일 폴더에 있는 모든 파일을 순회하면서 파일 검사.

// 파일 시스템 모듈 가져오기
const { dir } = require("console");
const fs = require("fs");

// 경로 모듈 가져오기
const path = require("path");

// public 루트 경로 
const rootName = "public";

// __dirname : 파일이 있는 폴더까지
const rootDir = path.join(__dirname, "..", rootName);

// 경로들을 담을 것
const result = {};

// 재귀 함수
const find = (currentPath = rootDir) => {
    // 경로의 파일과 디렉터리 목록을 읽기
    // 폴더 인지 확인
    // fs.readdirSync : 파일과 디렉터리 목록을 가져올 수 있다.
    // 반환 타입은 배열, 여러개가 될수 있기 때문에에
    const directory = fs.readdirSync(currentPath);
    // console.log(directory);
    
    // public/css
    // public/js
    // public/css/main
    // public/css/mypage
    // public/css/shop
    for (const index in directory) {
        // 디렉토리 경로를 인덱스 번호로 접근[0],[1],[2]....
        const findPath = path.join(currentPath, directory[index]);
        // console.log(findPath);
        // // 파일인지 폴더인지 확인
        // fs.statSync() : 파일의 내용을 객체로 받을 수 있는 메서드
        // statSync 반환 타입 -> boolean
        // ifFile : 파일이면 true, 폴더면 : false
        const isFile = fs.statSync(findPath).isFile();
        // console.log(isFile);
        // 만약 ifFile이 폴더면
        if(!isFile) {
            // public\css
            // public\js
            // 모든 폴더나, 모든 파일의 경로를 모두 호출한다. 재귀 함수를 사용해서서
            find(findPath);
        } else {
            // 파일일 경우에는
            // 여기에 실행할 코드 내용을 작성
            const key = currentPath === rootDir ? "/" : currentPath.replaceAll(rootDir, "");
            // console.log(key);
            // 파일의 /로 시작하는 폴더 경로까지 만들고 

            const httpPath = path.join(key, directory[index]).replaceAll('\\', "/")
            // console.log(httpPath);
            // 모든 파일의 경로를 완성 
            result[httpPath] = directory[index];
        }
    } 
    // 객체 형태로 반환 {}
    return result;
}

// const log = find();
// 요청 url이 /css/main/main.css 면 main.css
// console.log(log);
// 모듈로 내보낸다
module.exports = find(rootDir);