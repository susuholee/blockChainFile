# DOM의 사용 목적과 방법

BOM : 브라우저의 기능을 사용하기 위한 목적을 가진 객체
DOM : HTML 문서의 요소들을 동적으로 조작하는데 사용하는 객체

## DOM 객체의 요소 선택

```js브라우저의 기능을 사용하기 위한 목적을 가진 객체
// 요소의 아이디명으로 선택해서 요소를 할당
// 원하는 노드를 선택해서
const element = document.getElementById('box')


// element 이라는 곳에 html 요소에서 "box"요소를 할당
// element === <div id="box"></div>

// getElementById() 는 일반 요소에는 포함되어 있지 않다.
// getElementById() 는 id="box-01" 과 같은 하이픈으로 작성되어 있을 때 가독성을 높이기 위해 가져온다.
// id 요소는 메서드로 요소를 호출해도 되고
// html 문서상에 고유한 이름으로 사용하기 때문에
// javascript에서 동적으로 이름을 사용해서 접근할 수 있게 되어있다.
// 
```

```html
<div id="box"> </div>
```

### querySelector 

```js
// querySelector 아이디뿐만 아니라 클래스 즉, 선택자의 내용을 작성해서 css 선택자
// 요소를 호출할 수 있다.
// 선택자 이름으로 요소 호출
const element = document.querySelector('.box');

// 요소가 많을 경우
// 배열의 형태도 제공을 해준다.
// box 클래스를 가지고 있는 요소 유사 배열 node-list
const element2 = document.querySelectorAll('.box');
```

```html
<div class="box"></div>
```

### 요소의 속성값

```js
element.stlye.color = "blue";
// 인라인 스타일로 추가
element.style.backgroundColor = "blue";
// background-color === backgroundColor
```

### 요소의 내용 

```js
element.innerText // 글자의 내용을 작성할 때
element.innerHTML // HTML 요소의 내용 또는 글자를 작성할 때


// input과 img 요소 등은
// input 요소의 value type 등은 키로 접근이 가능하다
// img 태그도 마찬가지 
// 일반적인 요소가 아닌 특수한 요소들은 키로 값을 접근할 수 있다.

const content = document.querySelector(".content");
// content // value
// value라는 키를 가지고 값을 가져올 수 있다.
DD
```


```html
<input class="content" />
```


### 요소의 이벤트 속성

```js
const element = document.querySelector(".cotent-btn");
// click 이벤트 속성
// onclick 이라는 속성으로 정의되어 있다.
// 함수의 값을 전달했는데 
// 기능을 바로 호출하는게 아니고 대기 시킨다
// 콜백


element.onclick = () => {
    console.log("이 내용은 요소를 클릭할때 호출한다");
} 
```

```html
<button class="content-btn">누르세요</button>
```

## 이벤트를 활용해서 드래그앤 드롭

### 실습 과제

카운터
버튼 누르면 숫자가 증감하는 카운터 
+ 버튼 누르면 1증가 
- 버튼 누르면 1감소
 조건 0이하로는 감소하면 안된다.
