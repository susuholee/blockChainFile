import React, { memo } from 'react'

// memo를 사용한 컴포넌트의 리렌더링 조건
// 주시하고 싶은 props를 구분해서 전달
// 본인의 상태변수가 변했을때 리렌더링
// HOC 고차 컴포넌트

const Child = memo(({count, name}) => {
    console.log(name + "나 렌더링이 되었어");
    

    return (
        <div>
            {count}
        </div>
    )
}) 

export default Child
