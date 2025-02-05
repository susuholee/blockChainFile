# 클로저, 1급 객체

> 함수가 선언될때의 어휘적 위치를 기억하고 해당 변수 등을 접근할 수 있는 함수
> 자바스크립트에서 클로저의 개념이 가능한 이유는 -> function 자바스크립트의 함수는 1급 객체이기 때문이다.
> 함수형 프로그래밍을 할 수 있게 지원한다. (자바스크립트)

```js
// 2 ~ 3 급 객체
const a = if(1 === 1) { return true} 

// 1급 객체 : 제한이 없는 것
const b = function () {return 1};

const time = (time, text ) => {
    let a = 1;
    setTimeout(() => {
        console.log(a);
        console.log(text)
    }, time)

    const foo = () => {
        console.log(a)
    }
    return foo
}

const foo2 = time(); // 함수의 값을 할당
foo2(); // 아우터가 상위 스코프의 레코드를 참조하여 1을 가져온다. -> 1을 증가하여 2를 출력
foo2(); // 3 출력
foo2(); // 4 출력
foo2(); // 5 출력
foo2(); // 6 출력
// 참조하고 있는 값이 해제되지 않는다
// 데이터의 은긱
// 함수 외부에서 참조해서 수정하는 내용을 방지할 수 있다.

// C++ 포인터
// 포인터 주소의 개념을 배우지 못하는 이유가 javascript에서는 포인터의 개념이 없기 떄문
```

## 클로저의 특징

1. 함수내에서 선언한 함수가 상위 스코프의 변수를 참조할 수 있다.
2. 함수의 실행이 종료되어도 참조하고 있는 스코프의 변수는 해제되지 않는다. 

## 목적

1. 데이터의 구조화(캡슐화) : 외부에서 값을 참조 혹은 수정할 수 없게 할수 있다.
2. 함수형 프로그래밍 지원 : 함수의 내부의 함수가 참조하는 변수를 가지고 반환받은 함수로 값을 참조할 수 있다.

### 1급 객체
> 프로그래밍에서 1급 객체는 값처럼 사용할 수 있는 제한이 없는 객체
> 자바스크립트에서는 함수도 겂이다.
- 변수처럼 자유롭게 사용할 수 있는 객체 (인자 전달 가능, 반환도 가능, 할당도 가능)
- C언어에서는 함수를 변수처럼 저장 불가능 (함수 포인터를 사용함)
- 자바스크립트에서는 함수가 1급 객체이기 때문에 값으로 사용가능
- 1급 객체는 자유롭게 사용 가능한 객체 2급과 3급은 사용에 제한이 있는것
- 1급 객체의 종류 : 함수, 숫자, 문자열, 객체, 배열, 클래스, 프로미스 등
- 1급 객체라는 이름으로 부르는 이유는 특권을 가졌다 다른 표현


### 1급 객체의 조건 내용 
- 다른 함수의 매개변수로 전달해서 사용할 수 있다.
- 다른 함수의 return 반환값으로 사용할 수 있다.
- 변수 (배열 객체 등등)에 할당할 수 있는가?

> 자바스크립트의 함수는 1급 객체

const a = (b) => {
    
}

{
    foo : a
}

console.log(a);

a(() => {
    console.log(3)
})

### 클로저의 내용
> 자바스크립트의 클로저
> 함수안에 함수가 선언된 어휘적(렉시컬) 환경

## 문법
```js

const a = 0; // 전역 변수
function b() {
    const index = 0; // 지역 변수
    console.log(a);
    return function c() {
        console.log(index);
    }
}

const d = b();

```
> 작성한 함수 위치가 어디냐? -> 내가 직접 함수의 코드를 작성한 위치에 따라 클로저가 될수 있고 될수 없다. 

> 렉시컬 스코프 => 선언된 위치에서 상위 스코프를 참조한다 
> 렉시컬 스코프체인 => 선언된 위치에서 상위 스코프의 변수를 참조한다.

> javascript의 함수가 실행될 때 실행 컨텍스트를 만들고
> 콜스텍에 함수의 실행이 쌓이고 환경 레코드와 외부 아우터를 가지고 있다.(레코드에 함수를 기록할때 어휘적 위치도 기록이 된다.)
> 함수의 내부에서 함수가 선언되고 내부 함수에서 외부 함수의 변수를 참조하는 경우
> 자바스크립트 함수가 호출되고 외부 함수의 변수를 내부 함수가 참조하고 있는 경우 함수를 반환해서 사용하면 함수가 종료되어도 외부 함수의 변수의 값이 해제 되지 않는다.

### 렉시컬 환경(Lexical Environment)

1. Lexical Environment
> 코드가 실행되는 컨텍스트

2. 환경 레코드 
> 코드의 this의 값과 선언된 변수와 함수를 기록하는 공간
> 코드의 평가 단계 식별자의 바인딩을 기록하는 곳 

3. 외부 환경 참조(아우터)
> 렉시컬 환경에서 외부 렉시컬 환경을 참조

### 렉시컬 스코프
> 식별자의 스코프가 연결된 것을 스코프 체인이라고 한다.
> 코드를 작성한 구문이 작성한 그대로 스코프를 갖는 특징을 렉시컬 스코프라고 한다.
> 어휘적 스코프, 어휘적 스코프 체인

```js
// 클로저 함수가 스코프에 담긴 경우
function counter() {
    let index = 0;

    return function increment() {
        index++;
        console.log(index);
    }
}
    debugger
    const increment = counter();
    debugger
    increment();
    debugger
// 스코프의 내용을 확인하면 클로저 스코프가 추가된 것을 디버깅햇을 때 확인할 수 있다. 그러면 클로저 함수



// 클로저 함수가 아닌 경우 어휘적 위치에 내부 함수가 참조하는 외부 함수의 변수가 없다.
// 매개변수가 참조할 수 있으면 그것도 클로저 함수가 될 수 있다.


function counter() {
    index++;
    console.log(index);
}
debugger
const increment = counter;
debugger
const increment2 = counter();
debugger

// 클로저 함수가 아닌 경우 내부함수가 전역변수를 참조하고 있고 외부 함수의 변수를 참조하지 않은 경우
let index = 0; 
function counter() {
    return function increment() {
        index++;
        console.log(index);
    }
}
debugger
const increment = counter();
debugger
increment()
debugger

// 클로저가 있음 매개변수를 내부 함수가 참조하고 있다.
function counter(index) {
    return function increment() {
        index++;
        consoel.log(index);
    }
}
debugger
const increment = counter(0);
debugger
increment();
debugger

const a = 1;
const b = 2;
{ a: 1, b: 2}

function foo () {
    let a = 1; // 이 값은 외부에서 참조할 수 없는 값
    let b = 2;
    return function increment () {  
        // 클로저 함수로만 접근이 가능하다.
        // 값의 은닉
        // 캡슐화
        a++; // a라는 값을 참조할 수 있는 함수는 increment 라는 클로저 함수밖엥 벗다.
    }
}

function shop () {

}
// 상점의 변수는 클로저 함수로만 접근해서 변경할 수 있도록
// 상점의 기능이 작동할려면 shop 이라는 함수의 내용만 수정하면 된다.
```

## 클로저의 목적(클로저는 모듈 패턴)
> javascript의 코드를 구조화 재사용 가능한 단위
> 함수형 프로그래밍으로 작업할 수 있다.
> 불필요한 전역 변수를 만들 필요가 적어진다.
> 재사용성도 높아지고 유지보수성이 좋아진다.
> 상태 관리와 캡슐화 (개인 변수)

### 카운터
```js
const createCounter = () => {
    let index = 0;

    const increment = () => {
        index++;
        return index;
    }

    const decrement = () => {
        index--;
        return index;
    }
    // {increment, decrement}
    // 객체의 키를 할당하는 값을 참조하는 변수명과 같게 할것이다.
    // 축약
    // increment 키의 값은 increment 변수에서 참조하는 값을 할당할 수 있다.

    return { increment, decrement} // 1급 객체이기 때문에 배열이나 객체로 내보낼 수 있다.

}

// const { increment, decrement }
// obj.increment
// obj.decrement

const { increment, decrement } = createCounter();

// 모달 팝업
// 팝업이 열렸다 꺼졋다 하는 기능을 관리하는 변수를 클로저 함수로 한다.

```

### 이후에 디자인 패턴
> 디자인 패턴의 수업을 들어도 납득을 못함
> 선행되어야하는 부분 객체지향 프로그래밍의 이해도가 생기고
> class 문법에 익숙해야함
> 구현능력이 생겨야한다. (구현은 다른영역 구현할 수 있다는것이 객체지향 프로그래밍을 해야만 구현할 수 있는것은 아니다.)

> 구현능력이 필요하다.


### 실습
> 클론을 해도 되고 모양새를 갖춰서 이쁘게 html, css도 만들고
> 게시판 로컬스토리지 CRUD 구현
> 번호 제목 내용 작성자 이름

## 심화과정
> 글을 클릭하면 팝업이 뜨고 안에 글의 내용이 보이는 것 
> 페이지 전환 x

### 페이지네이션