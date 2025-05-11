
import Signup from "./Components/pages/Signup";

function App3() {
  return (
    <div>
      <Signup />
    </div>
  )
}
export default App3

// function App() {
//   const userId = useInput();
//   const {count, countHandler} = useCount({init : 0, value : 1});

//   return (
//     <div className="App">
//         {userId.value}
//         <input {...userId} />

//         {count}
//         <button onClick={() => countHandler("increament")}>증가</button>
//         <button onClick={() => countHandler("decreament")}>감소</button>
//     </div>
//   );
// }


// const App2 = () => {
//   const { request, res } = useAxios();
//   const {loading, handlerEvent}  = useLoading(request);
//   const userId = useInput();
//   const userPw = useInput();

//   useEffect(() => {
//     if(res) console.log(res);
//   }, [res]);

//   // 호출이 필요한게 있으면 비동기적으로 처리
//   const loginHandler = async () => {
//     handlerEvent({
//       url : "http://localhost:4000/login",
//       method : "POST",
//       data : { uid : userId.value, upw : userPw.value}
//     })

//   }

//   return (
//     <div>
//       <label>아이디</label>
//       <input {...userId}/>

//       <label>비밀번호</label>
//       <input {...userPw}/>
//       <button onClick={loginHandler} disabled={loading} >{loading ? "로딩중" : "로그인"}</button>
//     </div>
//   )
// }

// export default App2;
