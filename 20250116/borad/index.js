console.log(document.querySelector(".border"));

// innerHTML : 태그의 형태를 문자로 작성하면 브라우저가 해석해서 요소로 작성한다.
header.innerHTML += `
<div>
    안녕하세요
    <div>내 제목</div>
</div>
`
const border = document.querySelector(".border");

// 글이 생성되는 기능을 함수로 작성
/* <li>
        <span>번호</span>
        <span>제목</span>
        <span>내용</span>
   </li>
*/ 

const contentArr = [];


const createContent = (index, title, content) => {

    const _li = document.createElement('li');
    const _span01 = document.createElement('span');
    const _span02 = document.createElement('span');
    const _span03 = document.createElement('span');
    // 메모리상에 생성되고 변수에 주소가 할당만 되어있다.

    _li.append(_span01, _span02, _span03); //  li 요소에 자식으로 추가
    // input요소는 value라는 속성을 가지고 있고 value에는 우리가 입력한 값이 담긴다.

    _span01.innerHTML  = index;
    _span02.innerHTML  = title; // value는 input의 입력한 값을 참조
    _span03.innerHTML  = content;

    border.append(_li); // 요소의 자식으로 추가
}

const addContent = () => {
    const content = {
        index : contentArr.length + 1,
        title : title_input.value,
        content : content_input.value
    }

    console.log(content);
    contentArr.push(content); // 작성한 값을 배열에 저장
    console.log(contentArr);  // 배열에 저장된 내용들을 출력
    render(); 
}


const render = () => {
    // 화면에 추가한 글의 내용을 보여주는 함수
    
    // 다시 화면을 렌더링하기전에 게시글을 생성할때 초기화를 한번 해준다.
    border.innerHTML = `<li>
        <Span>번호</span>
        <Span>제목</span>
        <Span>내용</span>
        </li>`
// 초기화 

    for(let i = 0; i < contentArr.length; i++){  // contentArr 배열의 길이만큼 반복
        
        // 참조 타입은 구조분해 할당
        // 객체안에 있는 키의 이름으로 할당한다.
        // {} 객체안에는 꺼내고 오고 싶은 키값을 넣고 = contentArr 변수에 할당한다. 
        // contentArr 객체의 안에있는 키의 이름이 동일해야 한다.
        // 구조 분해 할당에서 키값 이름을 바꾸고 싶을 때
        //  example ) index : num index키의 값을 할당하고 num이라는 변수에 할당해서 num을 사용할 수 있다.
        
        
        const {index : num, title, content} =  contentArr[i];
        const index = 1;
        createContent(num, title, content);

    }
    
}

create.onclick = addContent;
