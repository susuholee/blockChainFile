// 데이터베이스가 없으니 임시 데이터베이스 coffee

// 임시 데이터베이스
let coffe = [];

// 데이터베이스 생성
// 매개변수로는 title, menu, imgPath 전달
// push 메서드 사용하여 배열에 추가
// [{}] 형태로 추가
const CreateCoffee = (title, menu, imgPath) => {
    coffe.push({title, menu, imgPath});
    return coffe; // coffe 반환 
}

// 전체 번호 조회 
const selectAll = () => {
    return coffe;
}

// 특정 번호 조회 
const selectIndex = (index) =>{
    return coffe[index];
}

// 객체 형태로 내보낸다.  
module.exports = {CreateCoffee, selectAll, selectIndex}