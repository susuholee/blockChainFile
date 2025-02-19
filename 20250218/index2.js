// 모듈화된 데이터를 가져오기
// require () : 외부에서 내보낸 모듈을 가져올 수 있다.
// require ('파일의 경로')
// export 에서 내보낸 데이터를 반환하여 가져온다
// require ES5 구문
// ES5에 생성된 모듈은 모두  require의 메서드를 사용한다.
const block = require('./index') // js는 생략 가능
const {lottoNum, result, init, play} = require('./lotto') // 구조분해 할당으로 내보낸 객체들을 가져온다.


// 다른 파일에서 index.js 에서 내보낸 데이터의 내용이 출력
console.log(`안녕 나는 ${block[0].name}이고 나이는 ${block[0].age}이야`);
// console.log(module.exports)  // {} 빈 객체 출력
// 

// console.log(module); // path 경로에 해당하는 node_moudles 출력
// console.log(exports); // {} 빈 객체 출력

// module.exports === 모듈에서 외부로 내보낼 객체의 내용
// 모듈 스코프에서 호출될 때 this === exports
// console.log(this, "나야 모듈");

function a () {
    // console.log(this);
}
// 함수가 호출될때 상위 객체는 global
a();

const b = () => {
    // => 함수는 this 바인딩이 일어나는 것을 막는다.
    // this 바인딩이 일어나지 않아서 모듈 스코프의 exports {}를 가르킨다.

    // console.log(this, "나야 b");
}
b();


init();
play();
console.log(result);
