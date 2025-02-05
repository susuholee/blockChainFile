// 댓글의 데이터를 저장할 공간 
let data = []; 


// 게시글을 저장하는 틀인  Comment 클래스
class Comment {
    constructor(_index, _value, _name, _image) {
        this.index = _index;
        this.value = _value;
        this.name = _name;
        this.image = _image;
    }
}

// 사용자가 폼의 특정 이벤트를 작동할 때 발생하는 함수 
content_form.onsubmit = (e) => {
    // 폼 내부에서 name 속성이 각각 content_value, content_image , content_name 들을 가져온다.
    // 여기서 e.target은 폼을 제출할 때 발생하는 이벤트 즉 content_form 자체를 가리킨다.  
    const { content_value, content_image , content_name} = e.target; 

    // console.dir(content_value);
    // console.dir(content_image);
    // console.dir(content_name);
    // content_image 이미지같은 파일은 input에 파일의 내용을 가지고 있는 객체에 포함된다.
    // 이후에 바이너리 데이터로 전송
    // 대용량 영상 처리를 백엔드 때 
    
    // console.dir(content_image.files[0].name)

    // 글 생성(Create)
    // 첫 번째는 인덱스 번호

    // 새로운 comment 객체를 생성
    // 기존 댓글의 갯수에서 1을 증가
    // 사용자가 입력한 댓글내용
    // 사용자가 입력한 이름
    // 사용자가 파일에 등록한 이미지 (여기서 이미지는 prototype 안에 있는 file 속성에서 [0]번 인덱스 번호로 가져온다) 
    
     const comment = new Comment(data.length + 1, content_value.value, content_name.value, content_image.files[0].name);
     
    // console.log(comment)

    // 배열에 새로운 객체인 댓글(comment)을 추가 
    // push한 데이터를 로컬 스토리지에 저장
    data.push(comment);



     // data 강제 형변환
     //  console.log(data.toString());
     // 문자열 변경을 하는데 JSON 문자열로 변경
   
     // javascript object natation : 요청과 응답간에 경량 데이터 형식을 만든 것.

     /*
        JSON 문법
        {
            'name' : "soon"
        }
     */

    // 내장되어 있는 원형 객체를 사용해서 변경
    // 반환값이 string JSON이 문자열
    // const str = JSON.stringify(data);
    // // 주고 받은 이후에 JSON 문자열을 사용하기 위해서
    // const obj = JSON.parse(str); // JSON 문자열을 객체의 형태로 변환
    // console.log(obj)

    // data라는 댓글들을 저장할 객체(배열)를 JSON 문자열로 변환하여  content_JSON에 할당
    // 변환된 JSON 문자열을 로컬 스토리지에 저장하는데 "comment" 라는 키로 저장된다.
    const content_JSON = JSON.stringify(data);
    localStorage.setItem("comment", content_JSON);
    console.log(data);
} 



/*
    <ul>
        <li>번호</li>
        <li>내용</li>
        <li><img /></li>
        <li>이름</li>
    </ul>
*/
// READ

const rander = () => {
    document.querySelector('.content').innerHTML = "";
    // 글의 갯수만큼 반복
    for (let i = 0; i < data.length; i++) {
        // 요소를 각각 생성
        const ul = document.createElement("ul");
        const li_01 = document.createElement("li");
        const li_02 = document.createElement("li");
        const li_03 = document.createElement("li");
        const li_04 = document.createElement("li");
        const li_05 = document.createElement("li");
        const image_tag= document.createElement("img");
        const deleteBtn = document.createElement("button");
        const updateBtn = document.createElement("button");
        ul.append(li_01, li_02, li_03, li_04, li_05);
        li_03.append(image_tag);
        li_05.append(deleteBtn,updateBtn);
        // 키 값을 인덱스 배열로 구조분해 할당
        const { index, value, name, image } = data[i];
        li_01.innerHTML = index;
        li_02.innerHTML = value;
        li_04.innerHTML = name;
    
        deleteBtn.innerText = "삭제";
        updateBtn.innerText = "수정";
        image_tag.src = "./images/" + image;
        // ./image/ghost.png

        deleteBtn.onclick = () => deleteHandler(i);
        updateBtn.onclick = () => updateHandler(i);
        document.querySelector('.content').append(ul);

    }
}
// READ 
// 처음에 등록된 내용을 남아있도록
const init = () => {
    if(localStorage.getItem('comment')){
        const _data = JSON.parse(localStorage.getItem('comment'));
        data = _data;
    }
    rander();
}
init();

// Update 
// updateHandler 라는 이벤트 함수 정의
const updateHandler = (index) => { 
    // 'index'에 해당하는 댓글 데이터를 가져온다
    const comment = data[index];

    // 해당 댓글이 포함된 ul 요소를 가져온다
    // querySelectorAll()은 NodeList로 반환된다.
    // 따라서 NodeList로 반환된 것은 인덱스 배열로 접근할 수 있다. 
    const ul = document.querySelectorAll('.content ul')[index];
    
    // 댓글의 내용, 이미지, 이름이 각각 포함된 li 요소들을 가져옴
    const li_02 = ul.querySelectorAll('li')[1];  
    const li_03 = ul.querySelectorAll('li')[2];  
    const li_04 = ul.querySelectorAll('li')[3]; 

    // 내용 수정 코드
    // 내용 수정할 input 요소 생성하고, 기존 값을 설정
    const newValueInput = document.createElement('input');
    newValueInput.value = comment.value;  // 기존 내용 설정
    li_02.innerHTML = '';  // 기존 내용이 삭제되도록 빈 문자열로 둔다. 
    li_02.appendChild(newValueInput);  // 새로운 생성된 input 요소를 li_02 요소에 자식요소로 추가  

    // 이름 수정 코드
    // 이름 수정할 input 요소를 생성하고, 기존 값을 설정
    const newNameInput = document.createElement('input');
    newNameInput.value = comment.name;  // 
    li_04.innerHTML = '';   // 기존 내용이 삭제되도록 빈 문자열로 둔다. 
    li_04.appendChild(newNameInput);  // 새로운 생성된 input 요소를 li_04 요소에 자식요소로 추가  

    // 이미지 수정 코드
    // 이미지를  수정할 file input 요소 생성
    const newImageInput = document.createElement('input');
    newImageInput.type = 'file';
    li_03.innerHTML = '';  //  기존 내용이 삭제되도록 빈 문자열로 둔다. 
    li_03.appendChild(newImageInput);  // 새로운 file input 요소 추가

  
    // '수정' 버튼을 '저장' 버튼으로 변경
    const updateBtn = ul.querySelector('button');
    updateBtn.innerText = '저장';

    // 저장 버튼 클릭 시 처리할 이벤트
    updateBtn.onclick = () => {
        // 수정된 내용을 가져옴
        const updatedValue = newValueInput.value;  // 수정된 내용
        const updatedName = newNameInput.value;    // 수정된 이름
        const updatedImage = newImageInput.files[0].name;  // 선택된 이미지 파일

        // data 배열에서 해당 index 위치의 데이터를 새로운 값으로 업데이트하는 코드
        // 새로운 객체 Commnet 를 만들어서 기존 data[index] 배열에  수정된 값을 저장한다.
        data[index] = new Comment(comment.index, updatedValue, updatedName, updatedImage);

        // 수정된 데이터를 로컬스토리지에 저장한다.
        localStorage.setItem('comment', JSON.stringify(data));


        rander();
    };
};



// Delete 
// deleteHandler라는 이벤트 함수를 정의
// data 배열에서 인덱스에 해당하는 것을 1개 삭제
// 변경된 데이터를 JSON 문자열로 변환하여 localStorage에 저장.
const deleteHandler =  (index) => {
    data.splice(index, 1);
    localStorage.setItem("comment", JSON.stringify(data));
    rander();
   
}

