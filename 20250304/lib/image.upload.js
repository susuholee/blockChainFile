const multer = require('multer');
const path = require('path');


// 내보내면서 키값 추가
// {upload : value } 반환
// const stroage = multer.diskStorage();
exports.upload = multer({ storage : multer.diskStorage(
        {
        // 파일의 저장소의 위치를 저장할 키값
        destination : (req, file, cb) => {
            // console.log(file);
            cb(null, "upload")
        },
        // 파일의 내용을 저장할 키값
        filename : (req, file, cb) => {
            // console.log(file);
            // 병아리.png
            // 병아리_02324151251.png
            // path 모듈 사용해서 확장자명, 확장자 이외의 이름 잘라내기
            const ext = path.extname(file.originalname);
            // ext 확장자 -> 병아리.png
            const baseName = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            // baseName 확장자가 없는 파일의 이름, 파일의 이름을 변경해서 사용
            // 병아리_02324151251
            cb(null, baseName, + ext);
            // 병아리_02324151251.png
        }
        }), 
        // 파일의 사이즈를 얼마나 설정할지 크기제한 키값
        // 5MB 파일 사이즈 설정
        limits: { fileSize : 5 * 1024 * 1024}
});

/*
 upload : {
    storage : { diskStorage: { destination : f (), filename : f () } },
    limits : {}
 }
 */