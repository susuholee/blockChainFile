import React, { useEffect, useState } from "react";
import { scissorsImg, rockImg, paperImg } from "../images";
import Player from "../components/Player";

const Game = () => {
    // 플레이어의 선택의 값을 담을 매개변수
    const [playerSelect, setPlayerSelect] = useState(null); // 플레이어가 선택할 변수
    const [comSelect, setComSelect] = useState(null); // 컴퓨터가 선택할 변수
    const [result, setResult] = useState("대기중"); // 결과를 담을 변수

    // 게임 컴포넌트
    const select = {
        scissors : {
            name : "가위",
            img : scissorsImg
        },
        rock : {
            name : "바위",
            img : rockImg
        },
        paper : {
            name : "보",
            img : paperImg
        }
    }
    // 선택을 보여주는 컴포넌트
    const playerSelectHandler = (_select) => {
        setPlayerSelect(select[_select])

        // 컴퓨터 선택
        const selectKey = Object.keys(select) // keys 객체 안에 있는 키를 반환, 배열 타입으로
        // ["scissors", "rock", "paper"]
        const randomIndex = Math.floor(Math.random() * 3);
        const selectContent = selectKey[randomIndex]; // "scissors" or "rock" or "paper"
        setComSelect(select[selectContent]);
    }

    // 결과 출력
    const resultHandler = () => {
        // 무승부 부터 거르자
        if(playerSelect.name === comSelect.name) {
            setResult("무승부");
        } else if(playerSelect.name === "가위") {
            const result = comSelect.name === "보" ? "승리" : "패배"
            setResult(result)
        } else if(playerSelect.name === "바위") {
            const result = comSelect.name === "가위" ? "승리" : "패배"
            setResult(result)
        } else if(playerSelect.name === "보") {
            const result = comSelect.name === "바위" ? "승리" : "패배"
            setResult(result)
        } 
    }

    useEffect(() => {
        if(playerSelect === null) return
        resultHandler();
    }, [playerSelect])

    return (
            <>
                <div className="plyer-wrap">
                    <Player name={"플레이어"} selectImg={playerSelect} resultText={result}/>
                    <Player name={"컴퓨터"} selectImg={comSelect} resultText={result} />
                </div>

                <div>
                    <button onClick={() => playerSelectHandler("scissors")}>가위</button>
                    <button onClick={() => playerSelectHandler("rock")}>바위</button>
                    <button onClick={() => playerSelectHandler("paper")}>보</button>       
                </div>
            </>
    )
}
export default Game