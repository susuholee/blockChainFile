# JWT 토큰
> JSON Web Token 약어
> JSON 형식의 데이터를 사용해서 유저의 데이터의 인증을 안전하게 토큰의 기반으로 사용하는 인증 방식

## 세션 인증 방식
> 유저의 정보를 세션 정보로 저장
> 클라이언트에서는 세션의 ID를 쿠키나 스토리지에 저장해서 요청하고 사용
> 서버에 상태를 저장하는 방식으로 자원이나 확장성이 떨어졌다.

## 토큰의 인증 방식
> 유저가 로그인을 하면 토큰을 발급받아서 클라이언트에서 쿠키나 스토리지에 저장하고
> 이후에 웹을 이용할 때 요청 헤더로 포함시켜서 유저의 인증을 검증한다
> 서버에 상태를 저장하는 방식이 아닌 토큰 인증방식으로 자원도 절약, 확장성도 뛰어났다.
> 토큰의 인증 방식 규칙, 카카오나, 구글 로그인을 구현하는데에도 토큰의 인증방식을 사용하게 되었다.
> 표준화된 인증 방식이 요구되어서 보안성과 확장성을 생각하고 탄생하게 토큰 기반의 인증 방식

## JWT 토큰의 형태

```js
/*
    Header.payload.signature
*/
// Header : 서명에 사용되는 알고리즘 이름, 토큰의 타입의 내용이 포함. 객체
// payload : 토큰에 담을 데이터의 내용, 유저 정보와 토큰의 발행 시간의 만료 시간을 표현
// payload는 값의 복원이 가능하다. 안녕 -> 항상 같은 값으로 해시화
// 해시의 문자열이 내용이 중요한게 아니고, 서명이 중요하다
// signature : JWT을 인증할 때 사용하는 값으로 헤더와 페이로드의 값을 base64URL 인코딩을 해서 더한뒤
// 비밀키를 가지고 서명값을 만든다.
// 서명을 만들때 헤더,페이로드, 비밀키를 가지고 만드는데 서명의 값이 달라진다. 그럼 인증을 하지못해서
// 검증이 안되는 토큰의 값이 탄생
// 서명의 값으로 원본 복원 불가

// sha246 :  데이터를 고정, 해시 문자열로 변환
// HMAC : 해시기반의 인증 코드, 비밀키를 사용해서 데이터를 해시 값으로 만들고 데이터가 변조되지 않았다는 것을 검증
let header = {
    "alg" : "HS256", 
    "typ" : "JWT",
}

let payload = {
    lat :  "생성 시간 밀리세컨드 생성시간은 이미 포함된 값",
    uid : "suho",
    name : "suho"
}

// signature 에는 base64URL(header) + base64URL(payload) 
let signature = base64URL(header) + base64URL(payload) 
// 비밀키를 사용해서 서명을 생성
// base64 : 해시 문자열로 변환
// URL 부분은 + _ 등등의 문자열은 표현했을 때 문제가 되니 해시 문자열로 변환
// exp : 해당 토큰의 만료시간

// iss : 토큰의 발급자
// and : 발급 받는 사람
```

### JWT의 장점
> 무상태 인증을 해서 서버에 세션을 저장할 필요가 없다.
> 확장성 여러 서버의 즉, 카카오나, 구글 이런 플랫폼에서 인증 정보를 공유할 수 있다.
> 표준화 여러 프로그램에서 호환성이 좋다

### JWT 설명
> 토큰의 주의할점 : 탈취가 되면 안된다. 만료시간을 정해서 토큰을 사용하게 해야한다.
> 비밀키를 잘 보관을 해서 안전하게 HTTP에서 노출되지 않도록 코드의 영역에 노출되지 않도록 사용
> HTTPS 네트워크 측에서 좀더 암호화된 방식으로 통신을 할 수 있도록 사용을 해야한다.

### JWT 문법
```sh
# jsonwebtoken 라이브러리 설치
npm i jsonwebtoken
```
```js
// jsonwebtoken 모듈 가져오기
const jwt = require('jsonwebtoken');

// 검증에 사용할 비밀키 
const KEY  = "MYKEY"

// JWT 토큰을 생성
// sign() : 토큰 생성 메서드
// sign({}) 
// 1. 페이로드의 담을 값 {} 객체 형태로 전달
// 2. 비밀키
// 3. 만료시간을 전달
const token = jwt.sign({uid : "suho", name : "suho"}, KEY , {expiresIn : "1h"});

console.log(token);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzdWhvIiwibmFtZSI6InN1aG8iLCJpYXQiOjE3NDE4MzA2MTMsImV4cCI6MTc0MTgzNDI
// xM30.XY5E6bPGNr5kxQCrjgLe5oll6mFfkjFKCvXZgJHvdEg

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzdWhvIiwibmFtZSI6InN1aG8iLCJpYXQiOjE3NDE4MzA2MzYsImV4cCI6MTc0MTgzNDI
// zNn0.1TSoOCTa0mYXUPUtk0AUzEEXlSUN3B_VoRMz9eHHy38

// 민감한 정보를 담으면 안된다.

// JWT 토큰 검증 후 디코딩 
const decoded = jwt.verify(token, KEY);
console.log(decoded);
```
### 모듈 시스템 
> 순환참조 문제점 node js에서 순환 참조 되었을때
> 빈객체가 할당되는 이유로 예측하지못하는 오류가 발생할 수 있다. 순환참조는 하면 안된다.