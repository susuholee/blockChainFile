// // 실습 
// // name이라는 변수를 선언하고 본인의 이름을 문자열로 할당해주세요 출력까지
// // let names  =  "안녕하세요";
// // console(names);


// // 값과 타입 
// console.log("4" === 4);


// // 값만
// console.log("4" != 6);

// // 값이나 타입 둘다
// console.log(6 !== "6"); 


// // 간단한 실습
// // num1이라는 변수와 num2라는 변수를 선언하고 재할당으로 num1에는 5의 값을 할당 num2에는 6이라는 값을 할당하고 
// // 연산자를 활용해서 두값을 비교했을때 true 값을 구하고싶다. 연산자는 자료형과 값까지 비교하는 연산자를 사용


// let num1;
// num1 = 5

// let num2;
// num2 = 6;

// console.log(num1 == num2)
// console.log(num1 === num2)

// let num1 = 100;

// 원하는 조건일 경우 코드를 실행하고 싶어
// 원하는 조건이 아닐경우 코드가 실행이 되지 않았으면 좋겠어.

// [if] (조건식) {
//     조건이 충족할때 실행시킬 코드 영역(스코프)
// }

// if(num1 > 100) {
//     console.log("내가 출력되니?"); // 조건에 충족하지 않으면 코드를 실행하지 않는다.

// }

// let str = "나는 이상암 학생이야";

// if(str ==="나는 이수호 학생이야") {
//     console.log("내가 보이니?")
// }else if (str === "나는 이수호 학생이야") {
//     console.log("내가 보이지!")
// }else {
//     console.log("충족되지 조건이 없습니다.")
// }


// 변수로 myName 이라는 변수를 선언, 값을 본인이름을 할당하고 반 전체 학생의 이름을 변수의 뒤에 1,2,3,4,5 이런식으로 선언
// 추가로 myValue라는 변수를 선언, 이변수에 할당한 문자열이 if 문의 조건을 반전체 학생의 수만큼 작성해서 조건식 검사 결과가 나오도록 콘솔에 출력



// let myValue = "이수호";


// let myName1 =  "이수호";
// let myName2  = "이준헌";
// let myName3  = "이상암";
// let myName4  = "김지은";
// let myName5  = "구다경";
// let myName6  = "김민교";
// let myName7  = "BINODE";
// let myName8  = "김홍규";


// if (myValue === myName1) {
//   console.log("저는"+ " "  + myName1 + "입니다");
// } else if (myValue === myName2) {
//   console.log("일치하는 이름을 찾았습니다:", myName2);
// } else if (myValue === myName3) {
//   console.log("일치하는 이름을 찾았습니다:", myName3);
// } else if (myValue === myName4) {
//   console.log("일치하는 이름을 찾았습니다:", myName4);
// } else if (myValue === myName5) {
//   console.log("일치하는 이름을 찾았습니다:", myName5);
// } else if (myValue === myName6) {
//   console.log("일치하는 이름을 찾았습니다:", myName6);
// } else if (myValue === myName7) {
//   console.log("일치하는 이름을 찾았습니다:", myName7);
// }else if (myValue === myName8) {
//     console.log("일치하는 이름을 찾았습니다:", myName8); 
// } else {
//   console.log("일치하는 이름이 없습니다.");
// }

// 1부터 10까지 숫자를 출력해줘
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }


// 오늘 목표 구구단 

// 구구단의 2단을 만들자

// for( let i = 1; i< 10; i++){
//     let str  = "2 X " + i + " = " + 2 * i 
//     // 수학 배울때 곱셈 나누기 먼저 하고 더하기 빼기기
//     console.log(str);
//     // 마지막 코드 영역까지 진행되서 다음 반복문이 실행될때는 해제
//     //
// }


// 구구단의 3단을 만들자

// for( let i = 1; i< 10; i++){
//     let str  = "3 X " + i + " = " + 3 * i 
//     // 수학 배울때 곱셈 나누기 먼저 하고 더하기 빼기기
//     console.log(str);
//     // 마지막 코드 영역까지 진행되서 다음 반복문이 실행될때는 해제
//     //
// }

// 실습 구구단에서 3단을 만드는데 조건문을 추가해서 3단의 4의 곱은 출력되지 않게

// for (let i = 1; i <= 9; i++) {
//     if (i != 4) {
//         console.log("3 *", i, "=", 3 * i);
//     } 
//   }

//  // 구구단 전체적으로 
// for (let i = 2; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       console.log(i + " x " + j + " = " + (i * j));
//     }
// }