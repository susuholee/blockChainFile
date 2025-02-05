function playGame() {
    const choices = ['가위', '바위', '보'];
    let userChoice = prompt("가위, 바위, 보 중 하나를 입력하세요:");


    if (!choices.includes(userChoice)) {
        alert("올바른 입력이 아닙니다. '가위', '바위', '보' 중 하나만 입력하세요.");
        return playGame(); 
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

 
    let result = '';
    if (userChoice === computerChoice) {
        result = "비겼습니다!";
    } else if (
        (userChoice === '바위' && computerChoice === '가위') ||
        (userChoice === '보' && computerChoice === '바위') ||
        (userChoice === '가위' && computerChoice === '보')
    ) {
        result = '당신이 승리하였습니다!';
    } else {
        result = '패배하였습니다..';
    }

  
    alert(`당신의 선택: ${userChoice}\n컴퓨터의 선택: ${computerChoice}\n결과: ${result}`);

   
    if (confirm("다시 하시겠습니까?")) {
        playGame(); 
    } else {
        alert("게임을 종료합니다. 감사합니다!");
    }
}

playGame();
