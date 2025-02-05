// 클릭의 위치 정보가 필요하다 

// 클릭한 위치의 좌표
// 클릭한 위치의 좌표를 눌렀을 때 땠을때

// 마우스의 클릭 시작 위치 
let start;

// 진행중인 swiper 인덱스
let index = 0;

// swiper 클래스를 가져온다
let swiper = document.querySelector('.swiper');

// swiperContent 클래스를 가져온다
let swiperContents = document.querySelector('.swiper-content');

// swiper의 길이가 필요
// swiper item 클래스의 구조분해 할당으로  길이만 가져온다. 
let {length} = document.querySelectorAll('.swiper-item');


let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');


// onmousedown : 마우스 클릭이 시작되었을 때 발생하는 이벤트
// 객체 형태로 onmousedown 이벤트가 들어온다

// stopPropagation() : 요소간의 이벤트 전파를 방지한다.
swiper.onmousedown = (e) => {
    
    // 클릭된 위치에 담긴다 
    start = e.clientX; 
    console.log("나 클릭시작 X축 : " + start);
}

swiper.onmouseup = (e) => {
    console.log("나 클릭 종료 X축 : " + e.clientX);
    // 마우스의 뗀 위치의 값이 start 보다 작으면 요소들이 오른쪽으로 이동
    if(e.clientX < start ) {
        // 요소들이 오른쪽으로 이동되어야한다.
        // 오른쪽으로 스와이프를 넘긴것
        // index가  length 의 -1 보다 작을때 까지만 
        if(index < length - 1)
        index++; // 스와이프의 길이가 증가
        swiperMove();
    } else {
        if(index > 0)
        index--;
        swiperMove();
    }
    console.log(index);
}

// swiper를 움직이도록 해주는 이벤트 함수
const swiperMove = () => {
    // getComputedStyle :css 영역의 스타일 시트에 접근해서 스타일 값을 가져오는 메서드
    let swiperWidth = parseInt(getComputedStyle(swiper).width);
    // 반환타입이 문자열
    // 0 * 500 === 0
    // 1 * 500 === 500
    // 2 * 500 === 1000
    // 3 * 500 === 1500
    console.log(swiperWidth);
    swiperContents.style.left = `${-(index * swiperWidth)}px`;
}

prevBtn.onclick = () => {
    if(index > 0)
    index--;
    swiperMove();
}

nextBtn.onclick = () => {
    if(index < length - 1)
    index++;
    swiperMove();
}