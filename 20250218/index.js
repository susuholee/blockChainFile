const blockClass = [
    {
      name : "soon",
      age : 20,
      comment() { // 메소드 축약형을 쓰는 이유 :  function을 사용하면 불필요한 생성자의 내용까지 포함되기 때문에 
        console.log("안녕");
      }
    },
    {
      name : "kim",
      age : 30,
      comment() {
        console.log(`안녕 ${this.name} 이야`) // name의 키를 가져와서 this가 바인딩되서 객체를 참조한다.
      }
    }
]
  
// index.js에서 내보내고 싶은 데이터
module.exports = blockClass; 
// console.log(module.exports);

// module.exports.add = blockClass;
// module.exports에 값을 할당하면 exports가 this로 호출된다.
// 글로벌 객체는 할당한 시점
console.log(this);