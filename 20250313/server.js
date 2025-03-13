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

const temp = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1aWQiOiJzdWhvIiwibmFtZSI6InN1aG8iLCJpYXQiOjE3NDE4MzA4NzAsImV4cCI6MTc0MTgzNDQ3MH0nbHw2x6cSbmQGKVQgfUxRYTLWpjg='

// JWT 토큰 검증 후 디코딩 
const decoded = jwt.verify(token, KEY);
// 서명으로 검증을 시도하는데 서명과 일치하지 않은 값이 나오면 검증 값이 아니기 때문에 변조가 되었다.
console.log(decoded);