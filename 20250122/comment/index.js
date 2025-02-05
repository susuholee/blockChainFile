
// 댓글의 형태가 객체

// 생성자 함수
// 
/* {
        uid: "",
        content : "",
        date : ""
    }
*/

// 유저의 정보를 담는 객체
const user = {
    uid : "soon",}; 

const obj = {
    index : 0,
    update : true,
}

// 커멘트의 내용을 보여줄 영역을 잡을 태그 요소를 가져옴
const commentList = document.querySelector('#comment-list'); 
const commentFrm = document.querySelector('#comment-frm');
// 이벤트를 사용하기 위해 form을 가져옴

// 객체를 생성하기 위해 Comment 클래스를 만듬
// Create 에 해당됨
class Comment { 
    constructor(content) {
        this.uid = user.uid 
        this.content = content; // 내용이 달라질 부분
        this.date = new Date(); // 글을 작성한 현재시간
        this.update = false;
    }

    // 값을 조회하는 메서드 
    getToday(text) {
        // 2025 01 21 : 날짜 사이사이 들어갈 문자열을 text 매개변수로 받는다. 
        // 날짜의 문자열 형태를 커스텀 하는 내용이 자주 사용되니 메서드로 만들어준다.
        const date = this.date;  // date 객체를 가져옴
        let m = date.getMonth() + 1; 
        let d = date.getDate();

        // 배열 메서드 join 
        [date.getFullYear(), (m > 9 ? "": "0") + m, (d > 9 ? "" : "0")+ d].join(text) // 달이 9보다 크면 빈 문자열, 0보다 작으면 0을 붙인다.
        // join() 키값은 반환값이 string 문자열로 형변환
        // , 요소의 구분 부분의 텍스트를 넣어준다.
        // [1,2,3].join("") === '123'
        // [1,2,3].join("*") === '1*'2*3'
        // (text === "-") === 2025-01-21 
    
        return  [date.getFullYear(), (m > 9 ? "": "0") + m, (d > 9 ? "" : "0")+ d].join(text);
    }
}

// 글을 작성했을 때 객체가 생성
// 생성자 함수가 호출된다.

// 전체 글을 담을 배열
// Create 해당 : create에 생성된 데이터를 담음
const state = []; 


// 총 글의 갯수를 담을 객체
// Read 부분분
const setTotalRecord = () => {
    const span = document.querySelector('h4>span'); // HTML 에서 h4 태그 안에 있는 span 태그를 가져와서 span 변수에 저장
    span.innerHTML = state.length; // span 태그 안의 내영을 state의 배열의 길이만큼 설정
}

    // Create에 해당됨
    // addstate 라는 함수에 value라는 매개변수를 받는다.
    // value라는 매개변수를 받는 이유는 사용자가 입력한 값에 따라 동적으로 변경되어야 하기 때문에  
    const addState = (value) => {
         // 문자열 관련된 내용
         // 댓글입력에 관련된 수정 메서드
         // trim : 띄어쓰기를 없애준다.
         // "         안녕"

         // 만약 입력된 값이 빈문자열이면 undefined를 반환하고 return문을 만나면 함수를 종료한다. 
        if(value.trim() === "") return;

        // comment 생성자 함수를 사용해서 새로운 객체를 만들고 
        // comment를 작성할 때 value의 공백을 다 제거하고
        // 제거한 문자열을 생성자 함수 매개변수로 전달
        const instance = new Comment(value.trim());

        // 생성된 객체는 instance 변수에 저장 
        // 생성된 객체인 instance에 배열을 추가한다 
        state.push(instance); 

        // 전체 댓글을 업데이트 하기 위해 setTotalRecord 함수를 호출한다.
        setTotalRecord(); // Read
    }



// Read - 데이터를 가지고와서 요소를 생성하여 화면에 렌더링하도록 
// 글 번호는 index 
// 게시글 하나 생성하는 함수 createRow 
// createRow 함수에는 매개변수 index를 받는다. 
// index 매개변수가 필요한 이유는 배열안에서 하나씩 가져올려고
const createRow = (index) => {
    // 배열에 추가된 글의 인덱스 번호를 사용하기 위해

    // state 배열을 거꾸로 뒤집어서 해당 index의 항목을 가져온다
    const item = state.reverse()[index]; // item : 글 하나를 담을 변수 

    // commentRow 변수에 ul 요소를 생성하여 
    const commentRow = document.createElement("ul");
    const commentId = document.createElement("li");
    const commentContent = getContentBox(item.update, item.content);
    const comeentDate = document.createElement("li");

    /*
        <ul></ul>
        <li></li>
        <li></li>
    */
    
    // commentRow 변수에 생성된 ul 요소의 comment-row클래스 추가
    commentRow.classList.add("comment-row");

    /*
        <ul class="comment-row"></ul>
        <li></li>
        <li></li>
    */

    // data-index="0" 

    commentRow.dataset.index = index; // 수정이나 삭제 부분 사용할 때 index를 요소에 기록
    // index라는 이름을 dataset 속성으로 만들고 내가 필요한 값을 저장, 요소에 속성값으로 저장,
    // 민감한 정보는 담으면 안된다
    // 스타일 작성하는 것 -> class
    // 개발자가 요소에 속성의 값이 필요할 때
   
    // commentId 변수에 생성된 li 요소의 comment-id 클래스 추가
    commentId.classList.add("comment-id");

    /*
        <ul class="comment-row"></ul>
        <li class="comment-id"></li>
        <li></li>
    */
    
    // 유저의 uid를 li 요소의 추가
    commentId.innerHTML = item.uid;  // 만든 요소를 추가

    // commentDate 변수에 생성된 li 요소의 comment-date 클래스 추가 
    comeentDate.classList.add("comment-date");

     /*
        <ul class="comment-row"></ul>
        <li class="comment-id"></li>
        <li class="comment-date"></li>
    */

    // 날짜 형태로 반환한 값을 li 요소의 추가 
    comeentDate.innerHTML = item.getToday('-'); 
    
    commentRow.append(commentId, commentContent, comeentDate); // 자식으로 추가 
     /*
        <ul class="comment-row">
        <li class="comment-id">
         </li>
        <li class="comment-date">
         </li>
        </ul>
    */

    // 완성된 ul 요소를 반환
    return commentRow;
}

//  Read
//  컨텐츠 영역을 나눌 함수 - getContentBox 
//  flag 수정중이라는 boolean 타입을 반환하는데
//  만약 수정중이 아니면  createContentWrap(content) 함수를 호출하여 일반 컨텐츠 요소를 생성하고,
//  수정중이면 createUpdateBox 함수가 호출이되어 수정용 요소를 생성하고,
//  반환한 값은 getContentBox에서 반환된 요소를 변수인 commentContent에 할당한다.


const getContentBox = (flag, content) => {
    // flag true나 false 값을 받아서
    // true면 수정중
    // false 일반 글

    // !false === true
    // !true === false
    return !flag ? createContentWrap(content) : createUpdateBox(content);
}
    // createUpdateBox = 수정용 박스 
    // createContentWrap = 일반 박스  

    // Read
    // 수정중이 아닐때  일반 컨텐츠 영역 요소 반환하는 함수를 createContentWrap()
    // 매개변수 content를 받는다.
    // content 매개변수를 받는 이유는 content라는 내용에 다른 내용을 추가할 수 있도록 확장성을 고려해서 받는다
    // commentContent 변수에 li요소를 생성하고
    // comment 변수는 span 요소 생성
    // commentDeleteBtn 변수는 span 요소 생성

    const createContentWrap = (content) => {
    // 요소를 반환 
    // 글의 요소와 삭제 버튼의 요소
    // 글을 클릭하면 수정모드로
    // 삭제 버튼 클릭하면 삭제 알림창
    
    // commentContent 변수에 새로운 li 요소 생성
    const commentContent = document.createElement('li');  // 요소 전체를 감싸는 부모
    
    // comment 변수에 새로운 span 요소 생성 
    const comment = document.createElement('span'); // 자식 요소

    // commentDeleteBtn 요소에 새로운 span 요소 생성성
    const commentDeleteBtn = document.createElement('span'); // 자식 요소
    
    /*
     <li></li>
     <span></span>
     <span></span>
    */

    // comment라는 생성된 요소에다 onclick 클릭 이벤트가 발생했을 때 clickHandler 이벤트 핸들러 함수를 실행
    comment.onclick = clickHandler; 
    // 생성된 요소 comment요소에 comment-update-btn 클래스를 추가 
    comment.classList.add("comment-update-btn"); // 클래스 추가
    
    /*
     <li></li>
     <span class="comment-update-btn"></span>
     <span></span>
    */

    // content라는 변수에 들어있는 값을 요소가 생성된 comment요소의 HTML 내용을 추가
    comment.innerHTML = content; 

    // 생성된 요소 DeleteBtn 요소에 comment-delete-btn 클래스를 추가 

    commentDeleteBtn.classList.add('comment-delete-btn'); // 클래스 추가
      /*
     <li></li>
     <span class="comment-update-btn"></span>
     <span class="comment-delete-btn"></span>
    */
        
    // commentDeleteBtn 생성된 요소에다 onclick 클릭 이벤트가 발생했을 때 clickHandler 이벤트 핸들러 함수를 실행
    commentDeleteBtn.onclick = clickHandler;

    // commentContent 생성된 li 요소의 자식으로 comment, commentDeleteBtn 추가 
    commentContent.append(comment, commentDeleteBtn); // li 요소에다 자식으로 추가
    /*
    <li>
        <span class="comment-update-btn">내용</span>
        <span class="comment-delete-btn">삭제버튼</span>
    </li>
    */

    return commentContent; // 함수가 실행된 곳에 요소를 반환
    
}

    // READ 
    // 수정중 일때 박스 컨텐츠 생성하는 함수 createUpdateBox
    // 매개변수를 받는 이유는 content라는 내용에 다른 내용을 추가할 수 있도록 확장성을 고려해서 받는다
    const createUpdateBox = (content) => {
    // commentContent 변수에 새로운 li 요소를 생성
    const commentContent = document.createElement('li');  // 요소 전체를 부모


    // commentUpdateInput 변수에 새로운 input 요소를 생성
    const commentUpdateInput = document.createElement("input");

    // commentDeleteBtn 변수에 새로운 span 요소를 생성 
    const commentDeleteBtn = document.createElement("span");

    // commentUpdateInput 변수에 생성된 input 요소의 comment-update-input 클래스를 추가
    commentUpdateInput.classList.add('comment-update-input');
    // <li></li>
    // <input class="comment-update-input">
    // <span>
    // commentDeleteBtn 변수에 생성된 span 요소의 comment-update-cancel 클래스 추가
    commentDeleteBtn.classList.add('comment-update-cancel');
    
    // <li></li>
    // <input class="comment-update-input">
    // <span class="comment-update-cancel">
    
   
    // commentContent 생성된 li 요소의 자식으로 comment, commentDeleteBtn 추가
    commentContent.append(commentUpdateInput, commentDeleteBtn);


    // input에서 Enter키를 누르면 수정중을 종료시키면서 글을 다시 렌더링
    // onkeyup : 키를 눌렀다가 땠을때
    // onkeyDown : 키를 누르자 마자 이벤트 발생


    commentUpdateInput.value = content;


    commentUpdateInput.onkeyup = (e) => {
        const {index} = e.target.parentNode.parentNode.dataset;
        console.log(e);
        // 엔터를 누르면 수정이 될수있게
        if(e.keyCode !== 13) return; // 함수 종료
        // 엔터눌렀을때만 코드 실행
        // console.dir(e.target.parentNode.parentNode);

        // update에 해당되지만 사용자가 버튼을 시각화하기 위해서
        state[index].content = e.target.value;
        state[index].update = !state[index].update; 
        drawing();
    }

    commentDeleteBtn.onclick = (e) => {
            const {index} = e.target.parentNode.parentNode.dataset; // dataset에서 index를 가져와서 e.target.parentNode 
            const flag = confirm("수정된 내용은 저장되지 않습니다. 정말 취소할거니?")
            if(!flag) return; 
            state[index].update = !state[index].update;
            drawing();
    }
        
    return commentContent;
}

    // READ 
    // clickHandler = 삭제와 수정을 둘다 처리할 핸들러 함수
    // clickHandler 함수는 e라는 매개변수를 받는다. 
    const clickHandler = (e) => {
    // pernentNode 요소의 부모요소 호출

    // 이벤트가 발생한 클릭된 요소에 부모요소안에 부모요소를 찾아서 contentNode에 할당
    const contentNode = e.target.parentNode.parentNode;

    
    const { index } =  contentNode.dataset; 

    // update
    // 만약 e.target에 클래스이름이 "comment-update-btn"이면 

    if(e.target.className === "comment-update-btn"){
        // 요소를 판단하기 위해서 className 을 사용
        // dateset의 값으로 요소의 인덱스를 찾아서
        // 반대의 boolean 값을 누를때마다 할당
        state[index].update = !state[index].update;
        // Update 객체의 키값을 초기값이 false , 댓글을 수정할 때는 true로 바뀌게 되면 
        // flag 그 부분에서 수정함수인 createUpdatebox 함수를 실행
       // const content = e.target.innerHTML; // 글자 내용을 가져오고
        drawing(); // 다시 화면에 재렌더링 
    } else {
        // Delete
        // 삭제 버튼일 경우
        // confirm : 사용자에게 모달창으로 확인과 취소 버튼을 요청하는 메시지 박스
        const flag = confirm("삭제할래?");
        // "삭제할래?" 문자열을 가진 confirm 함수를 flag에 할당 
        // 시스템 팝업 쓰지말고 직접 모달창 만들어서
        
        // 만약 삭제 요청이 true면
        if(flag){
            state.splice(index, 1); // 글의 배열(state)에서 인덱스 요소를 1개 삭제
            setTotalRecord(); // 전체 글의 갯수를 업데이트
            drawing(); // 다시 화면에 재렌더링
        }
    }
}
    // Read
    // 화면에 다시 재렌더링 하는 함수 drawing
    const drawing = () => {
    commentList.innerHTML = ""; // 글자가 있을 수도 있으니 기존 작성한 댓글을 빈문자열로 초기화
        // i는 0부터 state 배열의 길이만큼 증가하고
        // for문을 실행하면 
        // i가 0일때 -> state[0] -> {uid: "suho", content: "내용"}
        // 이렇게 새로운 글이 생성된다. 
    for(let i = 0; i< state.length; i++) {
        // createRow(i)에서 전달된 i는 state 배열의 인덱스로 접근하기 사용
        const row = createRow(i); 
        // 생성된 댓글을 목록에 추가한다.
        commentList.append(row);
   }
}

    // Create, update 
    // submitHandler 라는 함수를 
    const submitHandler = (e) => {
    e.preventDefault(); // 요청을 막는다 -> 새로고침이 일어나지 않는다.
    // 기본적인 form의 submit 요청기능을 제거
    console.log("안녕")
    const {content} = e.target; // input 요소의 name을 content로 작성했기 때문에 값을 가져올 수 있다.

    // content : content라는 이름의 속성을 가지고 있는 input 요소 자체
    const {value} = content; // 입력값
    // console.log(value);

    addState(value) // 배열에 객체 데이터 추가 글의 정보를 추가
    drawing(); // 화면에 그리는 작업
    content.value = "" // 댓글 입력한 다음에 다시 입력을 하게되면 빈문자열로 초기화시키는거
}

    commentFrm.onsubmit = submitHandler; // 함수의 값을 전달

// 상태(state)