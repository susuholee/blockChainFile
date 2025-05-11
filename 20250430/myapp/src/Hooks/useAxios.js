import axios from "axios"
import {useState} from 'react'

// 요청을 보낼때 로직, axios를 사용해서
// promise처럼 상태를 가지고 있는 객체를 만들것.
const useAxios = () => {
    const [res, setRes] = useState(null) // 응답에 대한 데이터를 저장할 상태 변수
    const [pendig, setPending] = useState(null);  // 대기중의 상태 변수
    const [rej, setRej] = useState(null); // 실패의 상태변수

    // 요청을 보내고 상태에 따른 로직 처리
    // 비동기적으로 처리
    const request = async (config) => {
        // axios 로직
        // 요청을 시작하면 대기중
        setPending(true); // setPending을 true
        // 에러 발생 코드는 try-catch 문으로
        try {
            const { data } = await axios({...config})
            // axios 함수에 전달하는 속성 값
            // 주요 속성
            // url : 요청 경로 /create/board
            // method : 요청 메서드
            // baseURL : http://scoop 모든 요청을 할때 url 앞에 붙는 기본값
            // headers : 요청 헤더의 내용
            // params : 쿼리 문자열 등을 요청 메시지 ?key=value
            // data : body에 전달하는 값
            setRes(data); // 성공 상태 데이터 값
        } catch (error) {
            setRej(error); // 실패 상태 데이터 값
        }
        setPending(false);
    }
    return {res, pendig, rej, request}
}


export default useAxios
