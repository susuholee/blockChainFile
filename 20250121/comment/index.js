
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
    uid : "soon",
}; 

const commentList = document.querySelector('#comment-list'); 

const commentFrm = document.querySelector('#comment-frm');

class Comment { // 객체를 생성하기 위한 Comment 클래스
    constructor(content) {
        this.uid = user.uid 
        this.content = content; // 내용이 달라질 부분
        this.date = new Date(); // 글을 작성한 현재시간
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
const state = [

]; 


// 총 글의 갯수를 담을 객체
const setTotalRecord = () => {
    const span = document.querySelector('h4>span'); // HTML 에서 h4 태그 안에 있는 span 태그를 가져와서 span 변수에 저장
    span.innerHTML = state.length; // span 태그 안의 내영을 state의 배열의 길이만큼 설정
  
}

// 배열에 글 추가
// addstate 라는 함수에 value라는 매개변수를 받는다.
// comment 생성자 함수를 사용해서 새로운 객체를 만들고

const addstate = (value) => {
    const instance = new Comment(value);
    state.push(instance); 
    setTotalRecord();
}

// 게시글 하나 생성하는 함수
// 글 번호는 index 
// index 매개변수가 필요한 이유는 배열안에서 하나씩 가져올려고
const createRow = (index) => {
    // 배열에 추가된 글의 인덱스 번호를 사용하기 위해
    const item = state[index]; // item : 글 하나를 담을 변수 
    const commentRow = document.createElement("ul");
    const commentId = document.createElement("li");
    const commentContent = document.createElement("li");
    const comeentDate = document.createElement("li");

    commentRow.classList.add("comment-row");
    // data-index="0" 
    commentRow.dataset.index = index; // 수정이나 삭제 부분 사용할 때 index를 요소에 기록
    // index라는 이름을 dataset 속성으로 만들고 내가 필요한 값을 저장, 요소에 속성값으로 저장,
    // 민감한 정보는 담으면 안된다
    // 스타일 작성하는 것 -> class
    // 개발자가 요소에 속성의 값이 필요할 때
   
    commentId.classList.add("comment-id");
    commentId.innerHTML = item.uid; 

    commentContent.innerHTML = item.content;
    
    comeentDate.classList.add("comment-date");
    comeentDate.innerHTML = item.getToday('-'); 
    
    commentRow.append(commentId, commentContent, comeentDate); // 자식으로 추가 
    return commentRow;
}


const drawing = () => {
   commentList.innerHTML = ""; // 글자가 있을 수도 있으니 빈문자열로 초기화
   for(let i = 0; i< state.length; i++) {
        const row = createRow(i); 
        commentList.append(row);
   }
}

// Create 

const submitHandler = (e) => {
    e.preventDefault(); // 요청을 막는다 -> 새로고침이 일어나지 않는다.
    // 기본적인 form의 submit 요청기능을 제거
    console.log("안녕")
    const {content} = e.target; // input 요소의 name을 content로 작성했기 때문에 값을 가져올 수 있다.
    // content : content라는 이름의 속성을 가지고 있는 input 요소 자체
    const {value} = content; // 입력값
    console.log(value);
    addstate(value) // 배열에 객체 데이터 추가 글의 정보를 추가
    drawing(); // 화면에 그리는 작업
    content.value = ""
}

commentFrm.onsubmit = submitHandler; // 함수의 값을 전달

