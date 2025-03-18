# 파일 업로드 Multer

> express 환경에서 파일의 업로드를 처리하는 미들웨어를 제공
> 파일을 업로드해서 미들웨어에서 메모리에 파일을 저장하는 기능을 제공

# Multer 모듈을 왜 사용하는가?
> 이전에 fs 모듈로 파일을 불러와서 서버에서 데이터를 청크 단위로 쪼개서 받거나, 버퍼 처리를 통해 데이터를 관리해야하고, 업로드한 파일을 서버에 저장하는 과정도 직접 구현해야하기 때문에 복잡해지는 상황이 발생합니다.이러한 기능을 보완하고 동적으로 처리할 수 있는 모듈이 Multer 모듈에서 제공되기 때문에 Multer 모듈을 사용합니다.

## 웹에서 파일을 업로드 하는 경우
> form 요소로 파일을 업로드를 했고, 데이터를 효과적으로 관리하기 위해 multipart/form-data 방식을 사용하게 되었다.

> 파일 업로드를 할때 `content-type`이 `multipart/form-data` 인지 확인해서 파일을 처리한다.

> 업로드한 파일의 파싱 내용도 요청 객체에 생성한다.

## 구조
> multipart/form-data 형식의 데이터를 처리하기 위해 스트림을 사용한다. 스트림은 데이터를 한 번에 메모리에 전달하지 않고, 데이터를 일부분씩 처리하는 방식으로, 대용량 파일 처리 시 효율적으로 처리할 수 있기 때문에 Multer는 요청 객체에서 파일 데이터를 스트림 방식으로 받아 처리합니다.
> 우리가 원하는 작업 폴더에 파일을 저장한다.

> 스토리지 옵션(diskStorage, memoryStorage) : 파일을 저장할 위치, 방법을 설정할 수 있는 옵션이 제공
> 파일 필터링(fileFilter) : 업로드되는 파일을 필터링해서 확장자 등의 조건에 맞는 파일만 처리할 수 있는 옵션을 제공
> 파일 크기 제한(limits) : 파일의 크기를 제한할 수 있다.

> 핸들러 함수를 사용한다.

### 멀티파트(Multipart) 형식
> 웹에서 파일 업로드와 같은 대용량 데이터를 인코딩하는 방식

### MIME 타입 (Multipurpose Internet Mail Extensions)
> 컨텐츠를 전달할 때 사용하는 파일의 종류를 요청 메세지에서 알려준다.
> content-type : text/html
> content-type : image/png
> content-type : application/json
> content-type : multipart/form-data
> content-type : application/actet-stream

> multipart/form-data : Binary Data를 전달할 수 있고, 여러가지 데이터도 같이 전달할 수 있다.
> 파일과 텍스트 데이터를 같은 요청에 포함해서 보낼 수 있다.

```sh
npm i multer

```

```js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// 저장소의 설정을 설정하기 위한 객체
// diskStorage : multer 라이브러리를 사용할 때 필요한 형식의 객체를 생성해주는 메서드 
const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        // 다음 미들웨어로 넘기는 함수, 콜백함수 안에 전달되어 있다.
        // 첫 번째 매개변수는 오류의 내용이 있으면
        // 두 번째 매개변수는 저장 위치
        cb(null, 'uploads');
    },
    // destination, filename 키 고정
    filename : (req, file, cb) => {
        // req 요청 객체
        // file 파일의 내용을 가지고 있는 객체
        // cb 다음 미들웨어 호출 콜백함수
        // file키에 저장할 이름의 형식을 전달해준다.
        // 파일이 저장될때 이름
        // Date.now() : 현재 시간을 반환하는 메서드
        // 안녕_2025/03/04/10/07 이름에 시간을 포함시켜서 고유의 키값도 포함시키는 경우가 있다.
        
        // 저장경로가 img/안녕
        // <img src="img/안녕.png">
        
        // 안녕
        // 안녕(2)
        // 원본 파일 이름에서 확장자명만 잘라오자.
        // path.extname() : 경로 문자열에서 확장자만 추출하는 메서드
        // HTML 폼에서 파일 입력 필드 : file.fieldname
        // 업로드된 파일의 원본 이름 : file.originalanme
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalanme))
    }
}) // diskStorage({}) : 객체의 내용을 반환

// 객체를 사용해서 미들웨어 함수를 만들 객체를 생성
// multer 객체 생성
// 설정한 옵션을 포함하고 있는 객체를 전달
// multer 객체의 안에는 메서드가 포홤되어있는데
// 우리가 미들웨어로 사용할 핸들러 함수를  반환할 메서드가 포함되어있다. 
const upload = multer({ storage });
// upload.single("키") ==> () => {} 핸들러 함수 반환

// 이미지 혹은 파일을 업로드하기 위한 요청처리
// app.use('/upload', upload.single("img"))

// 요청의 메세지에서 데이터의 타입을 검사하고 파일을 스트림으로 읽어서 파일을 원하는 경로에 저장한다.

// upload.single() 하나의 파일을 업로드
// upload.array() 파일을 여러개 업로드 할때
// upload.array("key", 10) 첫 번째 매개변수가 key, 두 번째 매개변수가 갯수

app.post('/upload', upload.single('img'), (req, res) => {
    res.send('안녕');
})

app.listen(3000, () => {
    console.log("서버 작동중~");
})
```

## 이미지 저장하고 화면에 출력

화면에 게시글 출력

### MVC 패턴으로 작성

> models : 데이터의 조작(조회와 저장)

> views : 사용자의 화면 UI 구성

> controllers : 사용자의 기능을 구성(로직 작성), 사용자가 컨트롤할 수 있는 내용, 기능들