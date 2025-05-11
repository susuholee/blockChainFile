import { useState } from 'react'

const useInput = () => {
    const [value, setValue]  = useState("");

    // input요소에 입력을 할때마다 상태변수로 저장하는 로직을 추상화
    // 요소 선택자를 쓸 필요가 없다.

    const handlerSetValue = (e) =>{
        setValue(e.target.value) // OnChange가 일어날 때마다 호출
    }

    // 입력값 초기화
    const valueClear = (e) => {
        console.log(e);
    }

    return {value,  onChange : handlerSetValue, onKeydown : valueClear}
}

export default useInput
