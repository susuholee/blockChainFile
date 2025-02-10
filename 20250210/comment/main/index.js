// 로그인 상태는 쿠키의 값이 있으면 로그인 상태다.
// 쿠키값을 가지고 유저정보 검증
// 쿠키도 결국 브라우저에 저장되는 문자열의 형태
// 데이터 베이스의 유저정보
const user = {
    uid : ""
}

const PAGENUM = 5; 
let   pageIndex = 1; // 처음 바라보는 페이지

// 게시글을 담을 배열 
// 저장한 값이 있으면 값을 가져와야한다.
console.log(localStorage.getItem("comment"));
const localStorageValue = JSON.parse(localStorage.getItem("comment")) // JSON 문자열을 객체의 형태로 형변환

const arr = localStorageValue || [];
// 값이 있으면 가져오고 없으면 빈배열로 초기화
// | : 값이 있는지 검사해서 있으면 1 없으면 0을 반환
// || : 값이 있으면 그 값을 반환한다. 
// || -> 앞에 값이 있으면 앞에 값을 반환 없으면 뒤에 값을 반환
console.log(arr);
// Create
class Comment {
    constructor(title, content){
        this.uid = user.uid;
        this.title = title;
        this.content = content;
    }
}

// title , cotnent 매개변수를 받아서 입력한 값의 빈 공백을 빼고
const addComment = (title, content) => {
    if(title.trim() === "" || content.trim() === "") return ; // 글 입력를 못하게 한다.
    const insatnce = new Comment(title.trim(), content.trim());
    arr.push(insatnce); 
    // 문자열을 형변환 할 수 없기 때문에 JSON 문자열로 변환하여 로컬스토리지에 저장
    // 저장한 것을 가져올 부분을 코딩
    localStorage.setItem("comment", JSON.stringify(arr));
}

// Read 
// 요소를 생성하는 함수 기능
const createContent = (index, search) => {
    let item;
    if(search){
        item = search[index];
    } else 
    item = arr[index];
    // 데이터의 object를 받아서 화면에 렌더링할 수 있도록
    const ul = document.createElement("ul"); // ul 요소 생성
    const li_uid = document.createElement("li"); // uid  li 요소 생성
    const li_title = document.createElement("li"); // title li 요소 생성
    const li_content = document.createElement("li"); // content li 요소 생성

    /*
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    */
   ul.append(li_uid, li_title, li_content); // ul 요소의 자식요소로  li_uid, li_title, li_content 를 추가
   // appendChild() : 하나의 요소만 추가할 수 있다.
   
   // 댓글 내용에 대한 요소를 구조분해 할당
   const {uid, title, content } = item; 
   li_uid.innerHTML = uid;
   li_title.innerHTML = title;
   li_content.innerHTML = content;
   // pageIndex * PAGENUM
   // index = 0  
   // index = 1
   // index = 2   
   // index = 3
   // index = 4
   ul.onclick = () => {
        location.href = `../detail/index.html?index=${ index + (pageIndex - 1 )* PAGENUM }`;
   }

   content_wrap.append(ul);
}

const render = (arr, search = false) => {
    content_wrap.innerHTML = "";
    arr.forEach((el, index) =>  {
    // 배열의 갯수만큼 순회
        if(search) {
        createContent(index, arr)
    } else {
        createContent(index); 
    }
   })
}
render(arr); 

// 여기서 e는 폼 이벤트를 발생한 타켓을 의미
// submit 이벤트가 실행되면 addCommnet 함수가 호출된다
form_wrap.onsubmit = (e) => {
    e.preventDefault(); // 새로고침을 막는다. 
    const { title , content} = e.target; 
    addComment(title.value, content.value); 
    console.log(arr);
    title.value = ""
    content.value = ""
    render(arr); 
}

// onkeydown은 value값이 할당되기 전에 콜백함수가 호출된다.
// value 값이 밀린것처럼 보임
search_input.onkeyup = (e) => {
    console.log("뭐가 눌렷어");
    console.log(e.target.value);
    const arrTemp = [...arr]; // 얕은 복사 하여 새로운 배열을 만든다
    // "".startsWith() 문자열이 매개변수로 전달한 문자열로 시작되는지 확인
    const searchArr = arrTemp.filter((el) => el.title.startsWith(e.target.value));
    console.log(searchArr);
    render(searchArr, true);
}

const paginationCreate = () => {
    const total = arr.length; // 전체글 갯수를 가져오고
    const pages = Math.floor((total + PAGENUM - 1) / PAGENUM);
    console.log(pages);
    console.log(total);
    
    for (let i = 0; i < pages; i++) {
        const span = document.createElement("span");
        span.innerHTML = i + 1;
        span.onclick = () => {
            pageIndex = i + 1;
            paginationContent(pageIndex);
        }
        pagination.append(span);
        
    }
}

// Content를 반환하는 메서드
const paginationContent = (index) => {
    // (현재 페이지 인덱스 - 1) x 페이지의 글 갯수
    let pagingContent = [...arr].splice((index - 1) * PAGENUM, PAGENUM);
    console.log(pagingContent);
    render(pagingContent, true);
}

paginationCreate();
paginationContent(pageIndex);

// 쿠키의 내용은 여러번 호출될 수 있다.
// 재사용성을 위해서 기능으로 만들자
// 만료 시간 지정안한 쿠키는 세션으로 만료시간이 지정되고 세션은 브라우저를 종료하면 사라진다.
// 쿠키의 삭제는 만료시간을 과거의 값으로 덮어씌우면 쿠키가 삭제된다.

const setCookie  = (key, value, time) => {
    let date = new Date();
    date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);
    console.log(date.toUTCString());
    document.cookie = `${key}=${value}; expires=${date.toUTCString()}; path=/;`
}

const deleteCookie = (key) => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

const getCookie = (key) => {
    console.log(document.cookie);
    let result;
    // 쿠키의 값이 여러개일때 ; 으로 구분
    let arr = document.cookie.trim().split(";");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim().split('='); // 빈 공백을 제거하고 = 구문을 잘라서 배열로 만든다
        if(key === arr[i][0]) {
            result = arr[i][1];
        }
    }
    console.log(result);
    return result;
}


if(getCookie('login')){
   login_user.innerHTML = getCookie('login');
   user.uid = getCookie('login');

} 

login_btn.onclick = () => {
    login_input.value
    setCookie('login', login_input.value, 1);
    setCookie('login2', login_input.value, 1);
    location.reload(); // 페이지 새로고침
}

logout_btn.onclick = () => {
    deleteCookie('login');
    location.reload(); // 페이지 새로고침
}

// 쿠키의 값이 있으면 로그인이 유지되는 상태가

