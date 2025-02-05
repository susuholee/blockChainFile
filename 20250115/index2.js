// function foo(a,b) {
//     console.log(this);
//     return [a,b];
// }

// const a = foo(1,2);
// console.log(a);

// const bar = {
//     method : foo
// }

// bar.method(2,3); 

// function foo(a,b) {
//     console.log(this)
//     return[a,b];
// }

// const obj = { name : "soon"}

// const fooBind = foo.bind(obj);

// console.log(fooBind); // binding의 내용이 포함된 참조할 객체가 이미 바인딩 되었다.


// const bar = { method : fooBind}
// bar.method(1,2);

// ///////////////////////
// function foo(a,b) {
//     console.log(this)
//     return [a,b]
// }

// foo.call({name: "soon"}, 1, 2);
// foo.apply({name: "soon"}, [1,2]);



// function foo(a,b) {
//     console.log(this);
//     this.arr = [a, b];
// }

// foo.prototype.getArr = function() { // 프로토타입에 getArr를 만듬듬
//     return this.args 

// }

// const _foo = new foo(1,2);
// console.log(_foo);




// class Foo {
//     constructor(a,b) {
//         this.arr = [a,b];
//     }

//     getArr() { 
//         return this.arr;
//     }
// }

// const _bar = new Foo(1,2);
// console.dir(bar)


// // 일반 함수
// new _foo.getArr(); // { } 생성자로 사용가능 생성자 함수가 있음

// // 메서드 축약형
// new bar.getArr(); // _bar.getArr is not a constructor ES6 메서드 축약령은 생성자 함수가 없어.



// function foo(n) {
//     console.log(n)
// }
// console.dir(foo); 


// const bar = (arg) => {
//     console.log(arg);
// }

// console.dir(bar);



// const obj = {
//     name : "soon",
//     getName() {
//         console.log(obj.name)
//     }
// }

// const obj2 = obj;
// obj2.getName2()


// this를 맞추는 문제

// function inner() {
//     console.log(3, this);
//     function outer() {
//         console.log("2", this);
//         function hello() {
//             console.log(4, this);
//         }
//         hello();
//     }
//     outer();
//     return function() {
//         console.log("1", this);
//     }
// }

// inner();

// inner.call({name: "soon2"})


//  bind(): 바로 실행하지 않고 함수 값을 반환한다. 

//  클래스 Foo를 생성하고
// constructor 생성자 함수를 만들고 매개변수에 name을 받는다.
// this.name = name : name 속성을 초기화
// getState() 라는 축약형 메서드를 만들고 그안에 콘솔에 this를 출력한다
// const obj 라는 변수에 new 키워드를 사용하여 새로운 인스턴스인 Foo를 생성하는데 name 속성을 "soon"으로 초기화한다.
// obj.getState() 메서드의 접근하는데 여기서 다른 객체를 참조하기 위해 this binding이 일어난다. 
// 이렇게 this binding이 일어나면 this는 더 이상 obj 의 주소를 가리키지 않고 ({name : "soon"})을 가리킨다.

class Foo {  
    constructor(name) {
        this.name = name; 
    }
    getState () {
        console.log(this); //  name: "soon2"를 출력한다. 
    }
}

const obj = new Foo("soon"); 

obj.getState =  obj.getState.bind({name : "soon2"});
 


// inner 함수를 생성
// inner 함수 내부에 outer() 함수를 선언하고
// 콘솔에 this를 출력하는데 밑에 outer.call({name: "soon3"})에서 this 바인딩이 일어나서 this는 ({name: "soon3"}) 를 가리킨다.
// 다시 콘솔에 this를 출력할 때 this 바인딩이 일어난 객체의 주소를 참조한다. 
// obj.getState 메서드의 this를 호출하는데 obj의 메서드의 this는 obj 객체에 대한 정의한 것이 없어서 this가 출력되지 않는다.
// console.log(this);  // 전역 스코프에서 호출이 되어서 this는 window 객체를 가리킨다.


function inner() {
    function outer() {
        console.log(this);
        obj.getState(this); 
 
    }

    console.log(this); // window 객체 출력
    outer.call({name : "soon3"}) 

}

inner();
