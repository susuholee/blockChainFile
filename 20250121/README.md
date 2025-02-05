# DOM을 사용해서 CRUD

댓글 구현

## count 


```js
const display = document.querySelecotr('#counter'); // id가 counter인 요소를 선택하여 display 변수에 저장
const incrementBtn = document.querySelector('increment');
const decrementBtn = document.querySelector('decrement');

let num = 0;

const increment = () => {
    num += 1;
    render();
}

const decrement = () => {
    num -= 1;
     render();
}
// increment // 요소들 호출
incrementBtn.onclick = increment; 
decrementBtn.onclick = decrement; 

const render () {
    display.innerHTML = num;
}
```


```html
<div id="counter">0</div>

<button id="increment">increment</button>
<button id="decrement">decrement</button>

```

### 이벤트 핸들러(handler) 함수 작성
> 이벤트 제어 함수를 만들어서 재사용성

```js
// 삼항 연산자
// 가독성이 떨어지는 조건문인데 1 뎁스까지는 괜찮다.
// 조건문 ?  true : false 

// const a = 1 === 2 ? 1 : 2

const handler = (event) => {
    // event.target
    display.innerHTML = event.target.id === "increment" ? ++num : (num > 0 ? --num : num);
}

incrementBtn.onclick = handler;

decrementBtn.onclick = handler; 

```

## CRUD 
> 댓글 구현

1. 댓글 입력할 수 있다(Create)
    - 댓글을 입력창에 입력하고 작성을 누르면 리스트에 댓글이 추가된다.
    - 댓글을 성공적으로 추가하면 입력폼의 입력내용을 리셋시켜준다. 

2. 댓글을 리스트로 조회해서 출력해준다. (Read)
    - 댓글의 내용은 `아이디`, `댓글 내용`, `날짜`로 표현
    - 댓글 리스트는 최신순으로 표현
    - 댓글의 총 갯수를 표현
    - 수정 버튼이 존재한다.
    - 삭제 버튼이 존재한다.
3. 댓글을 수정할 수 있다. (Update)
    - 댓글의 리스트에서 내용을 클릭하면 input요소가 생기고
    - input에 값을 입력받고
    - 엔터를 누르면 input의 내용을 수정되게

4. 댓글을 삭제할 수 있다 (Delete)
    - 해당 리스트의 삭제버튼을 클릭하면 안내를 한번 하고 삭제.
    - 확인을 누르면 삭제
    - 취소를 누르면 삭제 X

### Create 단계
객체를 사용해서 사물을 표현
> 댓글 하나의 내용이 객체로 표현될 수 있다.

```js
const obj = {
    uid : "soon",
    comment : "내용",
    date : "2025-01-21",
}
obj.uid
obj.comment
obj.date
// 글들이 리스트의 형태 수천개, 수만개가 될 수 있는 데이터를 관리하는데 좋은 데이터 타입
// 배열을 사용해서 관리하면 수월하다
// 백엔드 배우고
// 문자열로 변환되어서 데이터의 내용이 전달된다. 문자열

const date = `[{
    uid : "soon",
    comment : "내용",
    date : "2025-01-21",
}]`

// 데이터 파싱 -> 형변환을 해서

// 배열안에 글들을 담을거니
const contentList = [
    {
        uid: "soon1",
        comment : "내용1",
        date : new Date(); // 객체가 생성 
    }, 
    {
        uid: "soon1",
        comment : "내용1",
        date : new Date(); // 객체가 생성 
    }, 
    {
        uid: "soon1",
        comment : "내용1",
        date : new Date(); // 객체가 생성 
    },
    {
        uid: "soon1",
        comment : "내용1",
        date : new Date(); // 객체가 생성 
    }
];
0 1 2 3
for(let i = 0; i < contentList.length; i++) { // 배열의 갯수만큼 반복문 실행
    contentList[i].uid === "soon" 

    const str = `${contentList[i].uid}가 ${contentList[i].comment}를 ${contentList[i].date}에
    작성했음`
}

// Date 객체 

// 자바스크립트에 내장되어 있는 생성자
// 날짜, 시간, 데이터를 다룰때 제공하는 메서드가 포함되어 있는 객체 
new Date(); // 컴퓨터 시간으로 객체안의 내용을 만든다 


console.log(new Date(1000));
// 컴퓨팅 시스템에서 시간을 추적하는 시스템 유닉스 시간의 시점에서부터 
// 1000 밀리세컨드 시간이 증가된 값
// 메서드에 get 값을 가져오겠다 조회하겠다.
// set의 키워드는 수정하겠다.

console.log(new Date('2025-01-21'));

console.log(new Date().getFullYear());
console.log(new Date().getMonth() + 1); // 0 ~ 11
console.log(new Date().getDate()); // 일수는 그대로 1~
console.log(new Date().getDay()); // 일요일 부터 0 ~ 6
```

```js
const list = [{uid : "soon", comment : "내용", date : "2025"}]

const ul = document.createElement('ul'); // ul 요소를 생성해서 반환
// ul 이라는 변수의 주소를 할당
// 아직은 화면에 보이는 상태가 아니다.
// 브라우저의 노드 트리에 추가를 해서 화면에 보이게 만들어줘야 document에 보인다.
const li = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
// 생성 단계
ul.append(li, li2, li3) // 괄호에 전달된 요소를 자식요소 추가 

li.classList.add("comment-uid"); // 초기화 하는 단계
li2.classList.add("coment-content"); // 초기화 하는 단계
li3.classList.add("coment-date"); // 초기화 하는 단계

// 객체 구조분해 할당
const {uid, comment, date} = list[i];  // 배열의 키값이랑 동일해야함
// 구조분해 할당 하는 이유는 변수처럼 값을 사용해서 가독성을 높이기 위해서
list[i].uid // 이렇게 사용하면 가독성이 떨어지기 때문에 사용한다.


li.innerHTML = uid;
li2.innerHTML = comment;
li3.innerHTML = date; 


// <ul>
//     <li class="comment-uid">soon</li>
//     <li class="comment-content">내용</li>
//     <li class="comment-date">시간간</li>
// </ul>

document.body.append(ul); // 화면에 보이게 된다.
```
### 실습 
3시부터 페어 코딩
CR 구현 댓글 