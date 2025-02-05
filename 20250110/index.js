// window 전역객체 안에 있는 메서드 (브라우저의 기능을 메서드로 제공해준다.)
// console.log("123");

// 요소의 제어를 하고있지 않아서

// 입력 받은 값을 저장해서 사용하기 위해서
// prompt 우리가 입력한 값을 시스템 입력창 모달이 뜨고 입력한 값을 변수에 할당을 하면 저장할수 있다.
// prompt 반환값을 우리가 입력한 값을 문자열로 string

// let age = prompt("너 나이가 몇살이니?");

// 시스템 팝업으로 log를 확인하는 방법
// alert 
// null

// OR 연산자
// if((age > 20) || (age < 50)){
//     alert(age + "살이야")
//     alert(age > 20)
//     alert(age < 50)
// }

// 필수 조건사항만 채크 된다면 통과 3개 중에 하나만 선택하면 된다. 

// AND 연산자
// if((age > 20) && (age < 50)){
//     alert(age + "살이야")
//     alert(age > 20)
//     alert(age < 50)
// }else {
//     alert("나이를 20살 초과 50살 미만으로 작성하세요")
// }

// 이름 나이 성별 필수로 작성을 확인해야하는 내용들을 확인한다거나 등

// 반환 데이터 타입이 문자열
// 형변환 데이터의 타입을 변환

// 문자열 "10" -> 숫자형 10

// "90" -> 90

// "1" + 1 ===> 강제 형변환

// parseInt : 정수형으로 형변환을 한뒤 값을 반환해주는 메서드

// typeof : 데이터의 타입을 확인하는 예약어
// let str = prompt("숫자를 입력하세요");
// let num = parseInt(str);
// // NaN : not a number 숫자로 변환할수 없는 문자열을 숫자로 변환을 시도했다.
// alert(num);

// 숫자형으로 변경할수 없는 문자를 입력한경우 잘못입력했습니다.

// 복습
// 점수를 입력받고 
// 점수가 90 ~ 100점이면 A를 출력
// 점수가 80 ~ 90점 미만 이면 B를 출력
// 점수가 70 ~ 80점 미만 이면 C를 출력
// 점수가 70미만은 D를 출력

// let score = 22;

// if(score >=  90  && score <= 100){
//   console.log("A");
// } else if ( score >= 80 && score <= 90){
//   console.log("B")
// }else if ( score >= 70 && score <= 80){
//   console.log("c")
// }else if ( score >= 70 && score <= 60){
//   console.log("D")
// } else  {
//   console.log("F")
// }




// if 문 조건문

// 스코프 ---------------------------------------------------------


// 전역 스코프에 선언한 변수
// let a = 0;

// if(true) {
//     // 지역 스코프
//     console.log(a);
// }


// 지역 스코프
// if(true) {
//     let a = 0; // 스코프 영역이 종료되면 해제된다.
// }

// console.log(a);

// if(true) {
//     let a = 0;
// }

// if(true) {
//     console.log(a);
// }

// let a = 15;
// if(true) {
//     // let a = 10;
//     if(true) {
//         // let a = 20;
//         console.log(a);
//     }
// }


// ES5 var 지역변수에 선언한 변수가 window 객체에 포함되어서 해제가 되지않는다.
// var의 사용도를 낮춰서 사용
// if(true) {
//     var a = 10;
// }
// var a = 20;
// console.log(window);
// console.log(a);

// 전역 스코프와 지역 스코프의 이해를 필수로 해야한다.

// for (let i = 0; i < 10; i++) {
//     let a = i * 10;
//     if(true) {
//         // let a = 10;
//         if(true){
//             console.log(a); // 
//         }
//     }
// }

// 지역 스코프에서 선언한 변수를 가져올수 없기때문에 호이스팅 에러가 발생
// console.log(a);

// switch

// case 문의 조건에 충족할때 break문을 만나지 않으면 밑의 
// case문도 실행을 하다가 break를 만난순간 코드가 중단된다,.
// default 모든 case에 충족하지 않을때 호출된다.


// if(myMBTI_code_01 === "A" || myMBTI_code_02 ==="B"){

// }

// switch ("RUN") {
//     case "A":
//     case "B": 
//         console.log("달리는 나의 상태는");
//         break;
//     case "WORK" :
//         console.log("나의 일");
//         break;

//     default:
//         console.log("조건에 맞는 값이 전달되지 않았어.")
//         break;
// }

// // MBTI


// let score = 85;

// if (score >= 90) {
//   console.log("A+");
// } else if (score >= 80) {
//   console.log("B+");
// } else if (score >= 70) {
//   console.log("C+");
// } else {
//     console.log("F학점입니다")
// }




// 가위 바위 보 게임

// let userChoice;  // 유저의 선택
// let computerChoice; // 컴퓨터 선택
// let result; // 결과 


// userChoice = prompt("가위(0), 바위(1), 보(2) 중 하나를 입력하세요:");
// userChoice = parseInt(userChoice); // 문자형을 Int 형으로 변환 


// computerChoice = parseInt(Math.random() * 3); // 랜덤하게 3개의 값을 가지도록 한다

// if (userChoice === 0) { // 만약 유저의 선택이 바위(0) 이면
//   if (computerChoice === 0) { // 만약 컴퓨터의 선택이 바위(0) 이면
//     result = "비겼습니다.";   // "비겼습니다" 출력
//   } else if (computerChoice === 1) {  // 만약 컴퓨터의 선택이 바위(1) 이면 
//     result = "컴퓨터 승리!!";  // "컴퓨터 승리!!" 출력
//   } else {
//     result = "플레이어 승리!!!";  // 그렇지 않으면 "플레이어 승리!!!" 출력
//   }
// } else if (userChoice === 1){
//   if (computerChoice === 0) {
//     result = "플레이어 승리"; 
//   } else if (computerChoice === 1) {
//     result = "비겼습니다.";
//   } else {
//     result = "컴퓨터 승리!!";
//   } if(computerChoice === 2) {
//     result = "컴퓨터 승리";
//   } else if (computerChoice === 1){
//     result = "플레이어 승리";
//   } else {
//     result= "비겼습니다!!";
//   }
// }






// 논리연산자 사용한 가위바위보 게임  

// let userChoice2;  // 유저의 선택
// let computerChoice2; // 컴퓨터 선택
// let result2; // 결과 


// userChoice = prompt("가위(0), 바위(1), 보(2) 중 하나를 입력하세요:");
// userChoice = parseInt(userChoice); // 문자형을 Int 형으로 변환 


// computerChoice = parseInt(Math.random() * 3); 

// if (userChoice === 0) { 
//   if (computerChoice === 0) { 
//     result = "비겼습니다.";  
//   } else if (computerChoice === 1) {  
//     result = "컴퓨터 승리!!";  
//   } else {
//     result = "플레이어 승리!!!"; 
//   }
// } else if (userChoice === 1){
//   if (computerChoice === 0) {
//     result = "플레이어 승리"; 
//   } else if (computerChoice === 1) {
//     result = "비겼습니다.";
//   } else {
//     result = "컴퓨터 승리!!";
//   } if(computerChoice === 2) {
//     result = "컴퓨터 승리";
//   } else if (computerChoice === 1){
//     result = "플레이어 승리";
//   } else {
//     result= "비겼습니다!!";
//   }
// }


// for(let i = 0; i <= 100; i++){
//   arr.push(i); 
// }