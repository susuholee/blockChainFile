# React hook Context, Memo

1. context : 리액트는 단방향 데이터의 흐름으로 설계가 되어있다.
플럭스 패턴 부모컴포넌트에서 자식 컴포넌트로 props의 값을 전달해서 사용한다. 프로젝트의 규모가 커지게 되면
props 드릴링을 해도 개발은 가능은 하지만, 협업이 불가능 가독성 이슈, 프로젝트에 문제는 없다. 하지만 협업의 원활함을 해치기 때문에 피해야한다. props 드릴링을 피하기위해서 사용할 수 있는 React Hook 자식 컴포넌트에서 상태를 공유할 수 있도록 전달해준다.

```js
// A에는 name 필요하다, 하지만 B와 C는 불필요하다, age의 값이 또 필요하다, A까지 전달하기 위해서 불필요한 props가 증가 될 수 있다.

const A = (props) => {
    return (<>{props.name}</>)
}
const B = (props) => {
    return (<A name={props.name}> </A>)
}
const C = (props) => {
    return (<B name={props.name}></B>)
}

const App = (props) => {
    const [name, setName] = useState("");
    return (<C name={name}></C>)
}
```

## context 문법
```js
// Login 컴포넌트의 자식 컴포넌트에서 상태변수를 공유해야하는 내용 
// Login 얘는 부모 컴포넌트
// 3개의 자식 컴포넌트를 가지고 있다 (A,B,C의 컴포넌트가 있다)
// A의 컴포넌트에 값을 전달해야해서 props 드릴링이 발생, 이것을 방지하기 위해 context를 사용해서 전역적으로 데이터를 전달
// Login -> C -> B -> A (name이라는 상태변수)
import {createContext} from 'react';
// 상태변수를 저장할 저장소, 공유하기 위한 값을 저장할 공간
// 객체의 저장소를 하나 만들고
export const Store = createContext();
// 저장 공간을 만들고 사용하는 영역을 지정
// 플럭스 상태 공유, 부모를 기준으로 자식 컴포넌트들에게 저장공간의 주소를 주입

import Store from "./Store.js"
const Login = () => {
    // Login 부모 컴포넌트에서 프로바이더로 주소를 주입
    // 공유하고 싶은 값
    // 부모 컴포넌트의 값을 자식들이 props로 전달 받아서 사용하지 않고, 저장소의 주소에 접근하여
    // 사용할 수 있도록
    const [name, setName] = useState("sugo"); // 부모 컴포넌트에 상태변수
    
    const obj = {
        name, setName
    }

    return (
        <Store.Provider value={obj}>
        <C />
        </Store.Provider>
    )

}

const C = () => {
    return <B />
}
const B = () => {
    return <A />
}

import { useContext} from 'react';
import Store from './Store';

const A = () => {
    const obj = useContext(Store);

    /*
        {
            name, setName
        }

    */
}

```

2. memo : 리액트의 상태를 관리할때 혹은 props 부모 컴포넌트의 전달값을 가지고 다시 리렌더링을 할때
불필요한 리렌더링을 방지하기 위해서 사용되는 hook, 메모이제이션 기법을 사용해서 불필요한
렌더링을 방지하는 hook을 제공한다. props가 바뀌지 않으면 컴포넌트를 다시 렌더링하는 구조를 방지해준다.

```js
const Login = (props) => {
    return <div></div>
}

const App = () => {
    const [name, setName] = useState("suho");

    // setCount가 호출되어서 부모의 컴포넌트의 상태 변수가 변경되면 자식 컴포넌트는 모두 리렌더링 된다.
    // Login 자식 컴포넌트가 리렌더링 되는 시기는 name의 값이 변경되었을때
    return <Login name={name} />
}
```

### Memo의 문법
> 컴포넌트가 리렌더링이 되어야하는 때에만 리렌더링
> memo가 내부적으로 조건문을 가지고 렌더링
> 이전에 검증한뒤에 렌더링을 호출한다.
> 메모이제이션 기법을 사용하는 hook

```js
// 값이 변했는지 안변했는지는 memo가 확인
import { memo } from 'react';
// memo는 전달한 함수의 값에서 사용하는 변수의 값이 변경되었을때만 리렌더링을 호출
// 콜백함수 호출할 시기를 조건문으로 결정해주는 역활을 해준다.
// 이전 컴포넌트의 내용을 저장하고 값의 변화가 없으면 연산을 한번더 즉 렌더링을 하지않고
// 이전 내용을 바로 보여주고 값이 변화해서 리렌더링이 되어야하면 다시 연산해서 리렌더링을 해주는 것.
const Child = (({name}) => {



})

const Parent = () => {
    const [name, setName] = useState("suho");
    const [count, setCount] = useState(0);
    return (
        <Child name={name} />
    )
}

// 추가적으로 메모이제이션 기법을 컴포넌트에 사용을 할때 memo를 사용해서 리렌더링을 방지
// useMemo VS memo
// useMemo는 값을 계산하기 위한 용도록 사용
// memo는 컴포넌트가 리렌더링을 막기위해 사용

// memo와 useMemo의 둘다 사용할때 주의점
// 값의 비교를 하고 캐싱을 할지 말지 결정을 하기 때문에 주소를 새롭게 생성해서 전달하는 방식을 피해서 사용해야한다.
// for문 돌릴때 스프레드 연산자 쓰지말고 객체의 키값을 접근해서 사용
```

### 게시글의 컨텐츠를 memo로 사용
> 부모 컴포넌트 즉, 게시글 게시글의 배열이 상태변수

> 글을 추가하면 배열의 값이 변화하고
> 추가되는 컴포넌트만 리렌더링

// 1 안녕 이렇게 작성하고 버튼 클릭하면 1번 게시글이 수정되는것.
// 중간글을 수정하면 그 수정되는 글만 리렌더링