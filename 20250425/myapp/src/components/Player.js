import React, { useEffect } from 'react'

// 부모에서 props를 전달받는다
// props -> 객체
const Player = ({name, selectImg, resultText}) => {
    useEffect(() => {
        console.log(name);
    })
  
  let tempResult = resultText;
  if(name === "컴퓨터") {
    tempResult = resultText === "무승부" ? "무승부" : resultText === "이겼어!" ? "졌어" : "이겼어!"
  }

  return (
    <div className='player'>
        <div>{name}</div>
        <img src={selectImg?.img} />
        <div className='result-text'>{tempResult}</div>
    </div>
  )
}

export default Player
