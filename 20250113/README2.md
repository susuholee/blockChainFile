# 함수 
> 중복되는 코드의 재사용성을 높이기 위해서 
> 코드의 내용의 실행을 목적에 맞게 호출하기 위해서
> 자바스크립트는 코드를 실행했을때 커다란 묶음으로 실행을 하는데
> 전역공간에 작성한 내용을 모두 위에서 부터 밑으로 실행한다.
> 코드의 가독성과 재사용성이 용이하다

### 함수 선언
 
 ```js
[function 예약어] [함수 이름] (매개변수) {
    코드의 내용
}

// 함수 이름은 사용자 정의
// 매개변수 또한 사용자 정의
// 실행 호출
[함수 이름](매개변수); 


log("123");


// 우리의 기능을 만들고 있는 것. 
function message(value){ // message 라는 함수를 생성
    let value = 1 // value라는 변수가 할당되면서 1이라는 값이 할당된다.
    console.log(value);
    
}

message("1");
// 함수안에 내가 작성한 매개변수의 이름과 갯수만큼 초기화되고 할당된다 라고 쉽게 이해해보면 좋다.

function message (value, value2) {
    // 매개변수의 값을 할당하지 않으면
    // value2 === undefined
    //  let value = "1";
    //  let value2 = "2";
    console.log(value + value2);
}
message("1");

console.log(1,2,3,4,5,6, "123141251") // console.log() 도 사실 여러개의 매개변수를 받을 수 있는 메서드
 // 실행할 때 작성한 순서로 할당된다.
 ```

## 함수의 매개변수와 스코프
```js
let a = "함수";

function name(a){
    console.log(a); // a에는 "함수"라는 값을 출력

}

function name2(){
    console.log(a); // a에는 "함수"라는 값을 출력

}

name();
// a라는 매개변수가 있고 전역에 a라는 매개변수가 있으면 
// 식별자의 우선순위 정적인 스코프안에서 자바스크립트 엔진은 식별자를 판단하는데
// 해당 스코프내의 변수를 먼저 가져온다.
// 똑같은 변수명이 있어서 상위 스코프의 변수를 가져오지 못하는 현상을 `변수 섀도잉` 이라고 한다다 
```

### 함수의 매개변수와 반환값 

```js
// return : 값을 반환하고 종료.
// [return 예약어] [반환할 값]

function name(){
    return "안녕" // 함수를 실행했을 때 어휘적 위치에 생기는 값, return문을 만나면 
}

name();
let a = 1;

a
1 // 어휘적 위치에 1이라는 값이 호출된다.

console.log(a);
let b = a; // 어휘적 위치에 "안녕"

name();

[함수이름](); // 함수의 실행
[함수이름] // 함수이름만 호출하면 그냥 함수안에 작성된 내용이 호출출
console.log(name()); 

let e = name; // 반환값을 담은게 아니고 함수의 값자체를 할당한 것.
e // "안녕" 으로 호출하는 것이 아닌 function() {} 형태를 가져온다. 
e();
let f = name(); // "안녕"을 호출


function foo() { 
  // 전역 컨텍스트 생성
  // foo 함수의 실행 컨텍스트 생성
  let a = 1; // foo 실행 컨텍스트에 레코드의 기록
  function foo2() {
    // foo2 함수의 실행 컨텍스트 생성
    console.log(b); // b 변수를 찾으나 foo2의 스코프에 없으므로 ReferenceError 발생
    console.log(foo3()); // foo3 함수 호출
  }
  foo2(); // foo2 함수 호출
  let b = 2; // b 변수에 2 할당 (foo 함수의 변수 객체에 저장)
  // foo2 함수 호출 시점에는 b가 undefined 상태였으므로 ReferenceError 발생
}

function foo3() {
  // foo3 함수의 실행 컨텍스트 생성
  return 4;
}

foo(); // foo 함수 호출, foo 함수의 실행 컨텍스트 생성

function boo() {
  // boo 함수의 실행 컨텍스트 생성
  let b = 3; // b 변수 선언 및 할당
  function boo2() {
    // boo2 함수의 실행 컨텍스트 생성
    console.log(b); // 여기서 상위 스코프의 변수를 참조하여 3을 출력
    boo3(); // boo3 함수 호출
    function boo3() {
      // boo3 함수의 실행 컨텍스트 생성 
      console.log(a); // 참조 에러 발생한다 ,  a는 boo3의 스코프에 존재하지 않음
    }
    const a = 2; // a 변수 선언 및 할당, 하지만 const 는 블록 스코프이기 때문에 boo3()에 접근이 불가
  }
  const a = 1; // a 변수 선언 및 할당
  boo2();
}

boo();


```