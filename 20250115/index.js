class Student {
    constructor( _age , _city, _name) {
        this.name = _name;
        this.age = _age;
        this.city = _city
    }

    // 메서드 축약형 
    getInfo(){ 
        console.log(this); // this는 생성한 객체를 바라본다
        // return `내 이름은 ${this.name}`;
    }

    setInfo = function(){

    }
}

const student = new Student(24);

console.log(student);
// 함수와 메서드 차이 : 메서드는 객체에 포함된 함수

// 상위 객체를 바인딩해서
student.getInfo();

// 전역 스코프에 this를 찍으면  상위객체 (window객체)
console.log(this);

let getInfo = student.getInfo; // getInfo 안에 있는 내용을 getInfo에 할당

console.log(getInfo);
getInfo(); // getInfo 함수를 호출
// 찾지 못한다 주소를 참조해서 할당을 한 경우

// 익명 함수 -> 이름이 없는 함수
// 사용할때 한번 정의해서 호출하거나 변수에 할당해서 사용할 때
// 콜백 함수들을 사용할때 익명함수는 한번 정의하고 재사용 안할 내용이라던지를 작성해서 사용할 때
// 아니면 단순하게 함수의 값 형태를를 사용할 때


// TDZ 존 발생
let getInfo2 = function(){
    console.log(this);
}

let getInfo3 = getInfo2;

getInfo2();
getInfo3();

class Character {
    constructor(_hp, _mp, _atk){
        this.hp = _hp;
        this.mp = _mp;
        this.atk = _atk;
    }

    // 상태를 확인하는 메서드
    getState() {
        return `캐릭터의 HP : ${this.hp} MP : ${this.mp}  ATK : ${this.atk}`; // 캐릭터의 상태 정보를 문자열을 반환 
    }

    // 정적 메서드 [static] [예약어]
    // 클래스에서 사용할  정적 메서드
    // 일반적으로 클래스의 공용 메서드로 사용하기 위해서 만든다.
    // 객체에 포함되지 않고 
    static getAtk(n){
        return n.atk;
    } 
}

let character = new Character(100, 100, 10);
console.log(character); 
console.dir(character); // 객체의 형태를 출력해서 확인할때는 dir() 메서드가 좀더 명확하게 표현해준다.

// 정적 메서드 호출 방법 -> 클래스 안에 있는 정적 메서드를 호출
Character.getAtk(character); 

// 프로토 타입 
// 자바스크립트의 객체는 모두 원형을 가지고 있다.
// 원형의 객체를 모든 객체가 상속 받는다.
// 프로토 타입은 객체지향에 반하는 내용을 가지고 탄생한 언어이기 때문에

let num = "안녕하세요";

String.prototype.myfoo = function() {
    console.log("내가 만든 메서드");
}

// 자바스크립트는 원형의 객체를 상속 받고 있다.
num.myfoo();

// 문자열도 배열과 마찬가지로 인덱스로 접근이 가능하다.
console.log(num.indexOf("녕"));  // 문자열안에서 "녕"이라는 문자열을 찾아온다

console.log(num[1]);

// 원시 타입은 `박싱` `언박싱` 이 일어난다.

// class Animal {
//     constructor(name){
//         this.name = name;
//         this.speed = 0;
//     }
    
//     // 시작하는 메서드
//     run(){
//         this.speed += speed;  
//         console.log(`${this.name}은 ${this.speed}로 달리고 있다. (부모의 함수)`);
//     }

//     // 멈추는 메서드 
//     stop(){ 
//         this.speed = 0;
//         console.log(`${this.name}이 멈췄다. (부모의 메서드)`)
//     }
// }

// class Cat extends Animal {
//     constructor(name){
//         super(name);
//     }

//     // 오버라이딩 부모의 함수를 받아서 `오버 로드,  오버 라이딩`
//     // 재정의해서 사용할 수 있다.
    
//     // // 오버라디딩
//     // run(speed) {
//     //     this.speed = speed;
//     //     console.log(`${this.name}은 ${this.speed}로 달리는 중이다. (나는 자식의 오버라이딩 함수)`) 
//     // }
//     speak(){
//         console.log("야옹~")
//     }
// }

// const cat = new Cat("망치");

// cat.run(40);
// cat.stop();
// cat.speak();

// console.log(cat);


//  클래스로 동물 클래스를 만들고 좋아하는 동물 3종류를 만드는데 울음 소리는 각각의 동물들이 내는 울음소리를 내고
//  3 종류의 동물 중에서 1종류의 동물은 날 수 있다. 달리는 메서드 멈추는 메서드 클래스 4개를 만들어서

class Animal {
    constructor(name){
        this.name = name;
        this.speed = 0;
    }
    
   
    // 시작하는 메서드
    run(){
        this.speed += speed;  
        console.log(`${this.name}은 ${this.speed}로 달리고 있다.`);
    }

    // 멈추는 메서드 
    stop(){ 
        this.speed = 0;
        console.log(`${this.name}이 멈췄다)`)
    }
    speak() {
        console.log('동물 소리');
    }
    
}



class Lion extends Animal {
    constructor(name){
        super(name);
    }

    run(){
        this.speed = 10;  
        console.log(`${this.name}은 ${this.speed}로 달리고 있다.`);
    }

    // 멈추는 메서드 
    stop(){ 
        this.speed = 0;
        console.log(`${this.name}이 멈췄다)`)
    }
    speak(){
        console.log("어흥~")
    }
}

class Giraffe extends Animal {
    constructor(name){
        super(name);
    }


    run(){
        this.speed = 20;
        console.log(`${this.name}은 ${this.speed}로 달리고 있다.`);
    }

    // 멈추는 메서드 
    stop(){ 
        this.speed = 0;
        console.log(`${this.name}이 멈췄다)`)
    }
  
    speak(){
        console.log("코끼리~")
    }
}

class Elephant extends Animal {
    constructor(name){
        super(name);
    }

    // 날아가는 메서드
    fly(){
        console.log(`${this.name}은 날아갑니다.`)
    }

    run(){
        this.speed = 30;
        console.log(`${this.name}은 ${this.speed}로 달리고 있다.`);
    }

    // 멈추는 메서드 
    stop(){ 
        this.speed = 0;
        console.log(`${this.name}이 멈췄다)`)
    }
    speak(){
        console.log("야옹~")
    }
}


const mylion = new Lion('사자');
const myelephant = new Elephant('코끼리');
const mygiraffe = new Giraffe('기린');

mylion.speak();
mylion.run(); 
mylion.stop();
console.log(Lion);

mygiraffe.speak(); 
mygiraffe.run();
mygiraffe.stop();
console.log(Giraffe);

myelephant.speak(); 
myelephant.fly(); 
myelephant.run(); 
console.log(Elephant);