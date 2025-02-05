window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const logo = document.getElementById('logo');
    const metalogo = document.getElementById('meta-logo');
    
    // 로고 애니메이션 (로딩 시작 시 로고가 나타나도록)
    const logoAnimation = logo.animate(
      [
        { opacity: 0, transform: 'scale(0.8)' }, 
        { opacity: 1, transform: 'scale(1)' }   
      ],
      {
        duration: 1500,
        easing: 'ease',
        fill: 'forwards',
      }
    );

    const metalogoAnimation = metalogo.animate(
      [
        { opacity: 0, transform: 'scale(0.8)' }, 
        { opacity: 1, transform: 'scale(1)' }   
      ],
      {
        duration: 1500,
        easing: 'ease',
        fill: 'forwards',
      }
    );


    
    // 로딩 화면 스크린 동작
    const loadingScreenAnimation = loadingScreen.animate(
      [
        { transform: 'translateY(100vh)', opacity: 1 },
        { transform: 'translateY(0)', opacity: 0 } 
      ],
      {
        duration: 2000,
        delay: 1200,
        easing: 'ease',
        fill: 'forwards',
      }
    );
  
    loadingScreenAnimation.onfinish = () => {
      document.getElementById('loading').style.display = 'none'; 
    };
  });
  



// ---- 스크롤 이벤트 기능 ----------------- // 
let boxContent = document.querySelectorAll('.box-content');

// getBoundingClientRect - left , right, top, botttom의 수치를  가져올 수 있다. x축, y축
// getBoundingClientRect : 브라우저에서 보고 있는 기준으로 상대적 위치
console.log(boxContent[0].getBoundingClientRect().top);

// 상대위치를 절대 위치로 계산
// 상대위치값 + 스크롤 된 값

// 스크롤 된 값은 스크롤된 요소의 dom 객체의 내용에 포함되어 있다.
// 속성 pageXOffset pageYOffest :  스크롤 진행한 진행도의 값 수치 스크롤을 얼마나 했는지

// 절대 위치 === 상대 위치 + 스크롤 된 값값
console.log(boxContent[0].getBoundingClientRect().top + window.pageYOffset);

// scrollY 브라우저의 상단 기준으로 얼마만큼 스크롤이 이동했는지
// 맨위를 기준으로 하고 싶지 않아.
// 만들고 확인 화면의 크기만큼 더해주면 기준이 브라우저의 맨밑이 기준이 된다.

// 수치값을 담는 배열
const posY = [];
for (let i = 0; i< boxContent.length; i++) {
    posY.push(boxContent[i].getBoundingClientRect().top + window.pageYOffset);    
}


window.onscroll = () => {
    // onscroll : 스크롤이 될때마다 발생하는 이벤트
    // console.log(boxContent[0].getBoundingClientRect().top + window.pageYOffset);
    // innerHeight : 현재 요소의 높이 window는 브라우저의 값을 가진다

    console.log(window.scrollY)
    const scroll = window.scrollY + window.innerHeight;

    boxContent.forEach((el, index) => {
        if(scroll > posY[index]) {
            el.classList.add("is-active");
        } else {
            el.classList.remove("is-active");
        }
    })
 }
// ---------------- 텍스트 입력되는 기능 ----------------------

// 첫 번째 텍스트 내용
let content1 = "안녕하세요 \n 저는 이수호 입니다."; 
let textContent1 = document.querySelector(".textContent");
let i1 = 0; // 첫 번째 텍스트의 인덱스

// 두 번째 텍스트 내용
let content2 = "안녕하세요  경일IT 아카데미 블록체인 웹 풀스택 과정 이순현 교수입니다. \n 꿈을 꾸지 않으면 실현도 불가능하다.재능의 부족보다 목표와 꿈에 대한 결심의 부족함으로 실패를 한다. \n 지혜로운 것은 훌륭한 일이다. 하지만 그보다 더 훌륭한 일은 인내하는 것이다.라는 말이 있습니다. \n 자신이 어렵고 힘든 상황이라도 포기하지 않고 인내하고 노력한다면 무슨 일을 하던 원하는 목표에 도달할 수 있다고 생각합니다."; 
let textContent2 = document.querySelector(".textContent-2"); 
let i2 = 0; // 두 번째 텍스트의 인덱스

// 텍스트가 타이핑 되도록 하는 함수 선언
function typing() {
  
    if (i1 < content1.length) {
        let txt1 = content1[i1++];
        textContent1.innerHTML += txt1 === "\n" ? "<br/>" : txt1;
    }


    setTimeout(() => {
        const interval = setInterval(() => {
            if (i2 < content2.length) {
                let txt2 = content2[i2++];
                textContent2.innerHTML += txt2 === "\n" ? "<br/>" : txt2;
            } else {
                clearInterval(interval);
            }
        }, 2000);
    }, 2000);
};

let typingInterval = setInterval(typing, 200);


// ---------------- 게시판 버튼을 눌렀을 때 --------// 
document.querySelector('.post-btn').addEventListener('click', () => {
    // 모달창 생성
    const modal = document.createElement("div");
    modal.classList.add("modal");

    // 모달 내용 생성
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // 헤더바 요소 생성
    const headerbar = document.createElement("div");
    headerbar.classList.add("header-bar");
    headerbar.innerText = "";

    // 왼쪽에는 이미지 영역 생성
    const leftSection = document.createElement("div");
    leftSection.classList.add("left-section");
    
    // 오른쪽은 콘텐츠 영역 생성
    const rightSection = document.createElement("div");
    rightSection.classList.add("right-section");

    // 닫기 버튼 생성
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "X";

    closeBtn.onclick = () => {
        document.body.removeChild(modal);
    }
   
    const image_tag = document.createElement("img");
    image_tag.classList.add("image");
    image_tag.innerHTML = "";

    // 댓글창의 영역을 생성
    const commentSection = document.createElement("div");
    commentSection.classList.add("comment-section");
    
    // 댓글을 입력하는 요소 생성
    const commentInput = document.createElement("input");
    commentInput.classList.add("comment-input");
    
    // 댓글 등록 버튼 생성
    const commentButton = document.createElement("button");
    commentButton.classList.add("comment-button");
    commentButton.innerText = "댓글 게시";
    
    // 댓글 섹션에 입력창과 버튼 추가
    commentSection.appendChild(commentInput);
    commentSection.appendChild(commentButton);
    
    leftSection.appendChild(image_tag);
    rightSection.appendChild(headerbar);
    rightSection.appendChild(commentSection); 
    
    modalContent.appendChild(leftSection);
    modalContent.appendChild(rightSection);
    modalContent.appendChild(closeBtn);
    
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    let data = [];
    
    class Comment {
        constructor(_index, _value, _title, _name) {
            this.index = _index;
            this.value = _value;
            this.name = _name;
        }
    }
    
    content
})