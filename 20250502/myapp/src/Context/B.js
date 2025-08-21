import React, { useContext } from 'react'
import A from './A'
import { Layout } from './Content.styled'
import { LoginStore } from './store/Store'

const B = () => {
    const {setName} = useContext(LoginStore);
    const submitHandler = (e) => {
        e.preventDefault();
        // 커스텀 훅으로 관리
        // form 데이터를 제출하는데 name의 값이
        // name을 가지고 요청 객체로 파싱하는 작업을
        // 우리가 직접 만들수는 있을건데
        // name의 값을 전달을 해서 요청 객체를 form생성 

        // const formData = new FormData(e.target);
        // // for of 로 뭐가들어있는지 콘솔확인
        // // axios({ url : "" , method : "POST", data : formData})

        console.log(e.target.nickname);
        setName("suho1");
    }
  return (
    <Layout>
        <form onSubmit={submitHandler}>
            <label>이름</label>
            <input name='nickname'/>
            <button>이름 수정</button>
        </form>
      <A />
    </Layout>
  )
}

export default B
