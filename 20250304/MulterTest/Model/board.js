// 임시 데이터베이스
let coffee = [];

// 데이터베이스 생성
// 매개변수로는 title, menu, imgPath 전달
// push 메서드 사용하여 배열에 추가
// [{}] 형태로 추가
const CreateCoffee = (index, title, menu, imgPath) => {
    coffee.push({index, title, menu, imgPath});
    return coffee;
}

// 전체 번호 조회 
const selectAll = () => {
    return coffee;
}

// 특정 번호 조회 
const selectIndex = (index) =>{
    return coffee[index];
}

// 객체 형태로 내보낸다.  
module.exports = {CreateCoffee, selectAll, selectIndex}