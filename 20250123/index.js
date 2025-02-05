let plyerBtn = document.querySelectorAll(".player-btn");
let playerSelect = document.querySelector(".player-select");

console.log(plyerBtn);

// 플레이어는 rock scissors paper 중에 버튼을 눌러서 값을 할당

const Arr = ['scissors', 'rock', 'paper']; // 0,1,2 순서

// 게임 초기화 함수 init 
const init = () => {
    // 버튼만큼 반복문
    // 배열 메서드
    plyerBtn.forEach((item, index) => {
       // item에 0,1,2 번이 들어온다
       item.onclick = () => {
            console.log(index);
            playerSelect.classList
        //    if(playerSelect.classList[1] === undefined) {
        //    } else {
        //         playerSelect.classList.remove(playerSelect.classList[1])
        //         playerSelect.classList.add(Arr[index])
        //    }
                playerSelect.className = `player-select ${Arr[index]}`;
            
                const {value, text} = gameStart(Arr[index]);
                // 객체가 반환되니깐 구조분해 할당을 해서 값을을 꺼낸다
                document.querySelector('.result').innerHTML = value; // 결과에 대한내용을 넣어주고
                document.querySelector('.content-value').innerHTML = text; 
       }
    })

    // const a = (item,index) => {

    // }

    // const forEach = (a) => {     
    //     for (let i = 0; i < plyerBtn.length; i++) {
    //         a(plyerBtn[i], i);
    //     }
    // }

    // ------------------------------------------------------------- //
    // forEach는 콜백함수 내부에서 기능을 호출해야 하고
    // forEach는 반환 값이 없다. 메서드를 사용할 때 반환값을 확인하는게 필수
    // forEach 첫 번째 매개변수에는 배열의 요소가 순차적으로 들어온다.
    // [0,1,2,3,4,5,6,7,8,9].forEach((el))=>{console.log(el)})
    // 전달한 콜백함수를 배열의 갯수만큼 호출을 한다.
    // 두번째 매개변수 인덱스 번호
    // 
}

// 플레이어의 값을 버튼을 눌러서 이미지를 보여주는 이벤트를 초기화
init();

// 게임이 시작되면 호출할 함수
const gameStart = (player) => {
    // 플레이어의 값 매개변수 player
    // 컴퓨터의 선택은 여러번 호출되어야한다. 
    // 소수점을 버리자 - floor 
    // 반올림 - round
    // 컴퓨터의 값
    
    const index = Math.floor (Math.random()* Arr.length);  // 0 ~ 2 // 동적인 값을 준다 배열의 길이만큼
     let comSelect = Arr[index];
     document.querySelector('.com-select').className = "com-select " + comSelect;
     if(player === comSelect){
        return { value : "무승부", text : "무승부" } // 객체를 반환하는데 value에는 결과의 값 text에는 "무승부" 
     } else if (player === "rock" && comSelect === "scissors" || 
                player === "paper" && comSelect === "rock" ||
                player === "scissors" && comSelect === "paer") // 이겼을 때
     {
        return {value : "승리 짝짝짝", text : "플레이어의 승리"}
     }else {
        return {value : "패배 흑흑흑", text : "컴퓨터의 승리"} 
        // return 문을 만나면 반환 값을 함수 실행에 할당
        
     }
}