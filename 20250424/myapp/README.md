# 리액트의 이미지 랜더링
> 리액트는 html에서 이미지를 가져오는 방식과 조금 다르다
> 왜냐하면 `번들링` 되는 과정을 거치기 때문

## 이미지를 사용하는 예
```jsx
class App extends React.Component {
    render() {
        return (
            <>
             <img src="">

            </>
        )
    }
}
```


### import로 가져온 이미지
```jsx
import logoImg from "./images/logo.png"
class App extends React.Component {
    render() {
        return (
            <>
              <img src={logoImg} />
            </>
        )
    }
}
```
> 이렇게 썼을때 장점 : Webpack으로 이미지를 번들링하고, 해시를 붙여서 관리한다.
> 그래서 이미지를 변경하게 된 경우, 캐싱에서 좋다

### 만약에 동적인 이미지의 이름이 있다. public(이미지의 이름이 정해져 있지 않다)
```jsx
import logoImg from "./images/logo.png"

class App extends React.Component {
    render() {
        return (
            <>
                <img src={`/public/${this.state.props.imageName}.png`} />
            </>
        )
    }
}
```

*** 번들링 과정에서 src의 이미지를 impport 하지 않으면 번들링 폴더에 포함되지 않는다. ***
```js 
<img src={puppy} />

```
### 이미지를 사용해서 지뢰찾기 폭탄 제거반

1. 폭탄은 터지지않은 상태가 있고, 터진 상태가 있다 (컴포넌트의 상태를 제어해서 이미지를 조건부 렌더링) (본인이 터진지 아닌지만 알면 된다. )

2. 폭탄은 9개가 있다. (폭탄의 UI를 9개 배치)

3. 폭탄은 본인이 정답인지 알고 있고, 정답을 다 맞추면 "게임 오버" 조건을 만들자. 지뢰를  찾으면 게임 오버
