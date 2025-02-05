// function myCar(color, name) { // myCar라는 함수를 정의하고 color, name을 매개변수로 받는다
//     this.color = color;  // 새로 생성된 객체의 color 속성에 매개변수로 받은 color 값을 할당
//     this.name =  name;   // 새로 생성된 객체의 name 속성에 매개변수로 받은 name 값을 할당
// }
// const myRedCar = new myCar("red", "GV80");
// prompt(myRedCar);


// function myCar(color, name) { // myCar라는 함수를 정의하고 color, name을 매개변수로 받는다
//     this.color = color;  // 새로 생성된 객체의 color 속성에 매개변수로 받은 color 값을 할당
//     this.name =  name;   // 새로 생성된 객체의 name 속성에 매개변수로 받은 name 값을 할당
// }


// myCar("red", "GV60");// this 바인딩이 일어나서
// prompt(new myCar("red","GV70"));


// // 3,6,9 게임
// for (let i = 1; i <= 20; i++) { 
  
//   const lastNumber = i % 10; // 일의 자리를 구하기 위해 0 ~ 9까지 나오도록 하고 
  
//   prompt(lastNumber === 3 || lastNumber === 6 || lastNumber === 9 ? "박수" : i ); // lastNumber가 3,6,9 가 있는지 확인하고 있을시 "박수", false일시 해당 숫자 i를 출력력

//     if(i === 20) // i가 20이면 
//       prompt("프로그램이 종료합니다");  // 프로그램 종료
//   }

// // 돈을 입력하면 잔돈 계산기 100짜리로는 몇개 1000원 짜리로는 몇개 10000짜리는 몇개
// // 총 가지고 있는 돈 변수 필요
// // 그럼 먼저 100원자리 동전 변수와 1000짜리 동전 변수, 10000만원 짜리 동전 변수가 필요하다
// // 남은 금액을 계산하는 로직이 필요


// function calculateCoins() {
//   const totalCoins = parseInt(prompt("금액을 입력하세요 (원):")); // 사용자 입력을 받는다. 

//   if(isNaN(totalCoins)){
//     console.log("유효한 동전이 아닙니다.")
//   }

//   const coin100 = 100; // 100원 동전
//   const coin1000 = 1000; // 1000원 동전
//   const coin10000 = 10000; // 만원 동전
//   const coin100000 = 100000; // 시반반원


  

//   // 만원짜리 동전의 개수 계산  -> 전제 금액을 만원 동전으로 나눈 값을 정수형으로 변환하여  개수를 구하고
//   const Coins10000 = parseInt(totalCoins / coin10000);
//   // 남은 금액 계산  ->  전체 금액에서 만원짜리 동전으로 나눈 나머지를 계산
//   const remainingCoins10000 = totalCoins % coin10000;


//   // 1000원짜리 동전의 개수 계산 -> 남은 금액을 1000원 동전으로 나눈 값을 정수형으로 변환
//   const Coins1000 = parseInt(remainingCoins10000 / coin1000);
  
//   // 남은 금액 계산 -> 만원짜리에서   천원짜리 동전 나눈 나머지를 계산
//   const remainingCoins1000 = remainingCoins10000 % coin1000;

//   // 100원짜리 동전의 개수 계산
//   const Coins100 = parseInt(remainingCoins1000 / coin100);

//   prompt("입력한 금액: " + totalCoins + "원");
//   prompt("만원 짜리 동전의 개수: " +  Coins10000 + "개");
//   prompt("1000원 짜리 동전의 개수: " + Coins1000 + "개");
//   prompt("남은 금액: " + remainingCoins1000 + "원");
//   prompt("100원 짜리 동전의 개수: " + Coins100 + "개");
// }

// 함수 호출`
// calculateCoins();

