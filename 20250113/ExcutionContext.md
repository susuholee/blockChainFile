# 실행 컨텍스트 (ExcutionContext)

> 자바스크립트의 실행 컨텍스트는 식별자를 좀 더 효율적으로 관리해서 퍼포먼스를 끌어 올렸다고 보면 된다.

## 자바스크립트의 엔진 
> 우리가 사용하는 자바스크립트 엔진은 스크립트를 실행하면
> 콜 스텍에 전역 실행 컨텍스트를 생성하고 이 컨텍스트의 안에는 `레코드`와 `아우터`가 있다.
> 전역 공간에서 함수를 실행하면 전역 컨텍스트 이후에 하나의 실행컨텍스트가 더 생성된다. 실행 컨텍스트 안에는 레코드와 아우터가 존재
(함수의 실행 순서를 모르기 때문)



## 자바스크립트의 호이스팅 

```js
console.log(myValue); // 에러가 발생할까?

var myValue;
// 자바스크립트는 변수를 먼저 읽어서 기록을 하고 실행컨텍스트에 미리 저장을 한다.
// 이 저장하는 공간은 레코드라는 영역
// 환경 레코드 === 식별자와 식별자의 값을 기록하는 객체

// 초기에 자바스크립트를 실행하면 전체를 한묶음으로 실행을 하고 전역 컨텍스트를 생성
// 이때 전역 공간에 있는 변수, 함수 등을 모두 다 레코드에 리록한다. 
// 이때 `생성 단계`, `실행 단계`
// VAR는 값을 undefined로 초기화 해준다. let은 빈값으로 초기화한다. const도 

// 이후 선언문 이외의 코드를 실행하는 단계는 실행 단계
// 이때 이후에 업데이트할 내용은 여기서 일어난다.

// let의 값이 초기화 되지않은 상태에서 값이 호출하는 이 일시적 사각지대를 TDZ 라고 한다.
// TDZ : 선언하고 초기화 이전에 식별자를 참조할 수 없는 영역을 개발자가 만든 것.

// ES6는 목적성을 많이 추구한 구문의 내용이 많이 추가되었는데
// 선언하기 전에 변수를 호출하는 것은 일반적인 프로그래밍 언어와 다른 내용이기 때문에 일반적인 프로그래밍 언어처럼 추구


생성단계
var myValue; // var -> undefined
let myValue; // let -> null 값

실행단계 : 레코드의 가진 값들을 실행하는 단계
초기화 되기전에 TDZ이 발생한다.

변수를 찾는 과정에서 식별자 검증이 일어난다
전역 컨텍스트 생성하고 그 안에 `레코트`와 `아우터`가 존재
아우터가 상위에 컨텍스트에 있는 레코드를 참조한다. 
레코드에는 매개변수와 함수 안에서 사용된 전역 변수들이 저장

```

## 자바스크립트의 스코프

```js
// 전역 스코프
let myValue = 1; // myValue가 레코드에 저장, foo() 함수도 저장

// 함수
function foo(){
    // 블록 스코프 (함수 안에 작성된 영역)
    let myValue = 2;  // 여기서 만약 myValue 변수가 있고 콘솔 메서드가 없다고 가정하면 전역 컨텍스트에 가서 myValue를 참조하여
    console.log(myValue); // 변수 섀도잉이 일어나서 myValue는 가려진다. 함수 안에서 함수가 작성되면 다시 실행 컨텍스트가 생성되어 레코드에 저장.  
    
}

// foo();
// // 함수도 값이다.
// const a = function foo(){

// // }
// a();
// // 이렇게 할당이 가능하다. 


function foo(){
    // 블록 스코프 (함수 안에 작성된 영역)
    let myValue = 1; 
    foo2(); // 함수안에서 함수를 만나면 다음 코드는 중단한다.
}

function foo2(){
    // 블록 스코프 (함수 안에 작성된 영역)
    let myValue = 2; 
    foo3();

}
function foo3(){
    console.log(myValue); 
}

foo();




var a = 1;
var b = 2;

function outer(){
    var a = 3;
    let b = 4;
    function inner(){
        const c = 5;
        console.log(a,b,c);
    }

    inner();
}
outer();




function poo(){
    const num2 = 2; // num2 의 2를 할당 
    function poo2(num2) { // function poo2 함수에 매개변수 num2를 할당한다
        console.log(num2) // 콘솔을 출력하는데 num2에 저장된 2를 출력한다
    }
    const num3 = 5; // num3 의 5를 할당 
    function poo3(num3) { // 함수 poo3에 매개변수 num3을 할당
        poo2(num3) // poo2의 매개변수는 함수의 실행 위치의 정의한 매개변수의 이름으로 전달한 값이 할당되고 초기화된다,
        //  let num3 = 2; 이라는 변수가 초기화된다.          
        console.log(num3); // 현재 함수에 정의된 매개변수에 전달된 값을 호출한다.
    }
    const num4 = 6;
    function poo4(num4) {  
        poo3(num2); // poo3의 매개변수 num2는 상위 스코프에 있는 num2를 참조하여 값을 할당하고 poo3 함수의 실행 위치의 변수를 초기화하여 값을 할당한다.  
    }  
    poo4(); //poo4() -> undefined
}
poo();


function foo() { 
  // 전역 컨텍스트 생성
  // foo 함수의 실행 컨텍스트 생성
  let a = 1; // foo 실행 컨텍스트에 레코드의 기록
  function foo2() {
    // foo2 함수의 실행 컨텍스트 생성
    console.log(b); // b 변수를 찾으나 foo2의 스코프에 없으므로 ReferenceError 발생 console.log(b) 에서 b가 TDZ 영역에 있음음
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



function foo() {  
    const num = 1;
    function foo3() {
        console.log(num)
        foo2();
        function foo4() {
            console.log(num);
        }
        const num = 1;
        function foo6() {
            console.log(num2);
        }
    }
    foo2();
    const num2 = 4;
    function foo2() {
        console.log(num2)
    }
    function foo5() {
        foo3();
        foo4();
        console.log(num);
        foo6();
    }
    foo5();
}
foo()
```


