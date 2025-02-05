# 이벤트 속성 scroll swiper 

```js
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

//     const scroll = window.scrollY;
//     if(scroll > posY[0]){
//         boxContent[0].classList.add("is-active");
//     } else  {
//         boxContent[0].classList.remove("is-active");
//     }

}
```

### Swiper

> 과제 스와이프 직접 구현하고
> 이전에 우리가 만든 html 페이지에서
> 스와이프를 구현하고 스와이프의 위치는 페이지의 중단 또는 하단
> 스크롤해서 밑으로 페이지를 내리면 스와이프가 보이게
> 스와이프에는 현재 인덱스를 표현하는 불릿이 있다.
> 스와이프의 내용으로 본인의 페이지의 연관되는 이미지를 넣어서

>> 모바일기준 제작