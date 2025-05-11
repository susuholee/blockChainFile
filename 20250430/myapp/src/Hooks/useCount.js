import {useState} from 'react'


const INCREAMENT = "increament";
const DECREAMENT = "decreament";


const useCount = ({init, value}) => {
    const [count, setCount] = useState(init)

    const increament = () => {
        setCount((prev) => prev + value);
    }

    const decreament = () => {
        setCount((prev => prev <= 0 ? 0 : prev - value));
    }
    
    // useEffect 훅을 사용하는 로직이 필요하면
    // 모든 리액트 훅을 사용 가능
    // 리액트의 훅을 사용하는 기능을 추상화 시켜서 재사용성을 높여주는 것
    
    const countHandler = (key) => {
        switch (key) {
            case INCREAMENT:
                increament();
                break;
            case DECREAMENT:
                decreament();
                break;
            default:
                break;
        }
    }

    return {count, countHandler}
}

export default useCount
