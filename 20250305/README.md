# AJAX, Fetch, Axios와 Cors
> form 태그를 사용해서 요청을 보내고 응답을 처리하는 로직
> 태그로 요청을 보냈을때 요청을 받아서 처리하는 주체는 브라우저 페이지
> 쉽게 말해서 결국 페이지의 새로고침을 통해, 새로운 페이지의 내용을 동적으로 보여준다.
> 요청과 응답의 주체를 자바스크립트 로직으로 처리를 하게 로직을 작성

### Ajax 
> 초기에 웹 페이지에서는 모든 데이터를 받아서 처리하고, 페이지의 새로고침 없이 데이터를 화면에 보여주기는 불가능했다. 데이터를 가지고 따로 페이지 새로고침 없이 사용자의 UI를 보여주는데 무리가 있다.
> 데이터를 응답받아서 새로고침 없이 화면을 구성할 수 있는 기술을 개발하기 시작
> XMLhttpRequest라는 객체를 만들었고, ajax라는게 탄생, 페이지를 새로고침 하지 않아도 서버에서 데이터를 주고 받을 수 있게 되었다.
> 자바스크립트에서 로직을 제어하다보니 상태 값이 필요하게 되었고, 완료라는 상태가 되면, 상태코드를  확인하고
코드에 맞는 내용을 작성해서 사용해줘야 한다. 즉, 비동기 처리 로직이후에 호출되어야하는 콜백함수를 전달해서 사용한다.
콜백 지옥이 펼쳐질수 있고, 하드코딩의 내용이 많이 들어간다.

## 문법
```js
// XMLHttpRequest 객체
// 서버에 요청을 보내고, 그에 대한 응답을 받는 객체
let xhr = new XMLHttpRequest();

// 요청을 보내는 코드
// xhr.open() : ('요청 메서드', 요청을 보낼 경로, 비동기 처리 여부)
// open() : 요청을 준비하는 메서드
// open('요청 메서드', URL, 비동기 처리 여부)
xhr.open('GET', 'http://127.0.0.1:3000/board')

// 요청이 완료가 되면
// 응답을 받는 상태가 되면 호출되는 이벤트
xhr.onreadystatechange = () => {
    // 완료가 되었을 완료된 상태를 확인하고
    // xhr.readyState : xml객체의 상태가 완료상태 인지 확인하고
    // 완료 상태는 4번
    if((xhr.readyState === 4) && (xhr.status == 200)){
        JSON.parse(xhr.responseText)
        // 응답이 JSON 형식이라서 parse하여 자바스크립트 객체로 변환
    }
    // 응답이 완료되면 처리할 로직
}

// 요청
xhr.send();
```

### Fetch의 등장 
> XMLhttpRequest의 단점이 많았고, 문제점은 promise 객체 기반의 비동기 처리를 사용해서 ajax의 단점을 극복
> ajax는 콜백 함수의 기반이 많아서 코드의 하드코딩이 발생하고 콜백 지옥이 발생할 가능성이 높은 코드를 작성해야했다.

## Fetch의 특징
> Fetch는 promise의 기반으로 코드의 가독성이 증가하게되었다.
> JSON의 파싱의 메서드를 축약 처리가 가능하다.
> 코드의 내용을 작성할 때 이전보다 직관적인 코드를 작성할 수 있게 되었다.
> 상태 코드를 제어해서 하드코딩하는 영역도 따로 처리할 필요가 없어짐
> fetch 는 기본적으로 GET 요청
```js
fetch('http://127.0.0.1:3000/board').then((result) => {
     console.log(result);
     console.log(result.json());
     return result.json()
}).then((result) => {
    console.log(result);
})

async function myfh () {
    const response = await fetch("http://127.0.0.1:3000/board")
    // response  안에는 상태 코드의 내용도 포함되는 응답의 내용을 가지고 있는 객체
    const data = await response.json();
    return data;
}

async function myfh () {
    const response = await fetch("http://127.0.0.1:3000/create", {
        method : "POST",
        headers : {
            'Content-type' : "application/json"
        },
        // JSON 문자열로 변환해서 body 응답을 보냄
        body : JSON.stringify({title : "제목", content : "내용"})
    })
    // response  안에는 상태 코드의 내용도 포함되는 응답의 내용을 가지고 있는 객체
    const data = await response.json();
    return data;
}
```

### axios 외부 라이브러리
> Fetch는 API 요청을 보낼때 Ajax보다는 좀더 직관적이고 모던한 메서드를 제공하지만
> 오류 처리할 때 catch()라던지 처리가 잘 되지않는 문제가 있고 파싱하는 작업도 불편하다.
> JSON 파싱이라던지 명시적으로 JSON 파싱작업은 기본적으로 사용하는 기능인데, 우리가 직접 명시해서 코드를 작성을 해줘야하는 불편함 등등
> 요청을 보내거나 응답을 받아서 처리하는 과정에서 데이터를 조작하는 방법이 없다(인터셉터 기능)
> Axios는 fetch의 단점을 보완해서 개발한 promise 기반 http 요청의 클라이언트

## 문법
> 지금은 리액트를 사용할 수 없으니 html에서 사용을 해야하는데
> 모듈화된 라이브러리 코드를 모듈을 불러오는 코드를 브라우저의 런타임 환경의 자바스크립트에서 호출할 수 없으니
> cdn으로 제공되는 코드를 가져와서 사용할 것
> 라이브러리를 공부하는 방법, 가장 좋은 방법은 `공식문서` 를 참고
> 메서드가 활용될 때 어떤 반환 값을 반환하는지
```js

const response = axios.get('http://127.0.0.1:3000');
console.log(response.data);

const foo = async () => {
    const data = await axios.get('/');
    console.log(data);
}
foo();

const foo = async () => {
    // Post는 두 번째 매개변수로 객체나 배열 형태로 데이터를 body로 전달
    const data = await axios.post('/', {title : "제목", content : "내용"});
    console.log(data);
}
foo();
```
## form 태그의 요청과 차이
> form 태그는 브라우저가 직접 요청을 처리하는 로직을 실행한다. 즉, 페이지의 새로고침이 기본 동작으로 페이지를 출력해준다.
> 새로고침이 되기 때문에 기존 페이지가 바뀌어서 새로운 페이지를 보여준다.
> axios 등등 이런 자바스크립트 로직에서 응답을 처리하는 경우는 요청 주체가 자바스크립트다. 위에 form은 요청 주체가 브라우저다.
> 내부적으로는 자바스크립트에서 브라우저의 기능의 기본 동작을 제어해서 http 요청을 만들어준다.
> 기본동작을 막았다는 것은 새로고침도 막고, 데이터의 응답의 내용도 브라우저에서 처리하지 않고 자바스크립트 로직에서 처리한다는 것.

## REST FULL API
> REST 라는 뜻 -> 쉽게 말해서 http의 아키텍처를 설계한것, 리소스의 요청과 응답의 방식을 설계
> XML 기반으로 무거운 데이터를 전달하는 과정에서 웹 페이지의 성능이 무척 많이 떨어졌다.
> 복잡한 구조를 작성하기가 힘들었다.
> 이런 문제를 해결하기 위해서 REST라는 http 프로토콜을 활용해서 효율적으로 리소스의 직관적인 관리를 하게 된것.
> API를 리소스 중심으로 설계하자

# REST의 주요 원칙
1. 클라이언트-서버 구조
> 클라이언트와 서버를 명확히 구분해서 독립적으로 확장 가능하게 설계

2. 무상태성
> 요청들을 각각 독립적으로 처리하게 하며, 서버는 클라이언트의 상태를 저장하지 않게 한다.

3. 캐시 기능
> http 캐싱 기능을 활용해서 성능을 향상 시키자

4. 계층적 시스템
> API 서버 데이터베이스 인증서버 등등, 계층 서버의 아키텍처 설계

5. 코드 온 디맨드
> 필요성에 따라서 서버에서 클라이언트로 실행이 가능한 코드를 전달할 수 있다.

한줄로 요약해서 `RESTfull API` 우리가 URL을 통해서 리소스를 명확하고 구분해서 설계하고 HTTP 메서드(GET, POST, PUT, DELETE)를 활용해서 데이터를 주고받는 어플리케이션을 개발하는 개발 방식

## CORS
> CORS는 웹의 보안정책들 중에서 하나로 웹 어플리케이션의 서로 다른 도메인의 리소스를 접근할 때 발생하는 보안의 이슈로 제어하기 위한 정책을 해결하는 방안. 쉽게 말하면 보안은 유지하되, 요청과 응답간에 서로 다른 도메인의 서버여도 리소스의 접근이 가능하게 해결한다.
> 보안정책은 `Same-origin-policy` 동일한 출처 정책
// www.naver.com ==> 프론트 서버
// www.back.naver.com ==> 백엔드 서버

// www.naver.com ==> 프론트 서버
// www.naver.com ==> 백엔드 서버

// 서버의 아키텍처를 설계하다보면 이렇게 동일한 출처의 정책을 지킬 수 없고
// 해결하는 방안이 필요하게 되었다.

> SOP의 문제를 해결하기 위해서 탄생한 cors 자바스크립트가 다른 도메인의 API에 요청을 하는것을 제안하는 내용을 해결해준다.
> 출처와 프로토콜 도메인 포트가 동일해야 요청이 가능한 정책
> 악성의 유저가 요청으로 인해 사용자의 민감한 정보나 잘못된 리소스의 요청을 할 수 있기 때문에 위험성이 있다.

> React나 등등 라이브러리나 프레임워크들도 등장을 하게 되면서 도메인을 길게 사용하는 경우가 어려워졌다. 다른 도메인을 많이 사용하게 된것, CORS가 등장할 수 밖에 없던것.

```js
const express = require('express');
const cors = require('cors');
const app = express();

// 미들웨어 요청이 들어오면 헤더의 내용을 추가해서 다음 미들웨어로 진행
app.use(cors({
    origin : "허용할 도메인",
    methods : "GET, POST, PUT, DELETE",
    allowedHeaders : "content-type"
}))

// Access-Control-AlloW-Origin
// Access-Control-AlloW-Methods
// Access-Control-AlloW-Headers

// 프리플라이트 요청이 발생
// 프리플라이트 : 요청을 허용한 출처인지를 한번 확인

// TCP 통신 진행

app.listen(3000, () => {
    console.log("서버 작동중..")
})
```

### CORS 원리 
> 특정 출처에 요청을 허용할 수 있도록 하는 로직 개념

1. preflight : 요청 즉, 사전에 허용한 출처인지 검증하는 요청
> 다른 도메인에서 요청이 발생하면 프리플라이트 요청을 한번 검증하고 TCP 통신이 이루어진다.
> 클라이언트에서 메서드를 사용해서 서버에 실제 요청을 보내기 전에 한번 검증을 거처서 리소스를 안전하게
전달하고 응답 받을 수 있는 것.
> HTTP 레벨에서 동작, TCP랑은 별개로 TCP 요청은 이후에 진행된다.
> 프리플라이트 요청은 단순 요청에서는 필요가 없다. get과 post 사전 검증은 단순 요청에서는 필요 없다.