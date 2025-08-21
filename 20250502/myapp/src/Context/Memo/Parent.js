import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    // 상태변수 초기화
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    // increament() 부모의 상태변수를 증가시키는 함수
    const increament = () => { 
        setCount(prev => prev + 1)
    }

    const childCountincreament = () => {
        setCount2(prev => prev + 1)
    }

    return (
        <div>
            <div>count : {count}</div>
            <button onClick={increament}>증가</button>
            <button onClick={childCountincreament}>첫번째 자식 컴포넌트 카운트 증가</button>
            <Child count={count2}  name={"첫번째"}/>
            <Child count={0} name={"두번째"} />
            <Child count={0} name={"세번째"}/>
        </div>
    )
}

export default Parent
