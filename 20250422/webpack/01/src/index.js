const root = ReactDOM.createRoot(document.querySelector('#root'));

// jsx 문법을 사용하지 못하니 
// 리액트의 함수를 직접 호출해서 리액트 요소를 만들어서 제공해보자 
// React.createElement( ) : 리액트 요소 생성성
root.render(React.createElement("div", null, "점심시간 다가온다!"));