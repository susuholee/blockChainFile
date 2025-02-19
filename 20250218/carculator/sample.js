// 전역 스코프 에서는 this는 빈 객체
console.log(this);

function a() {
    console.log(this === global);
}

console.log(require);