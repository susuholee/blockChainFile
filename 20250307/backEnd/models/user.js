// 임시 데이터 베이스
const user = [];

// 전체 유저 조회하는 함수
const userSelectAll = () => {
    return user;
}

// 유저가 있는지 검사하는 함수
// userFindUid 원시 값을 매개변수로 받지 않는 함수
// 객체의 key 구조분해할당을 매개변수로 받아서
const userFindUid = ({uid}) => {
    const [data] = user.filter((el) => el.uid === uid )
    return data;    
}

const userFindUidUpw = ({uid, upw}) => {
    const [data] = user.filter((el) => (el.uid === uid) && (el.upw === upw));
    return data; 
}



// 유저 인덱스만 조회하는 함수
const userSelectIndex = (index) => {
    return user[index]
}

// 유저 생성하는 함수
const userCreate = (_user) => {
    user.push(_user);
}

module.exports = {userSelectAll, userFindUid, userSelectIndex, userCreate, userFindUidUpw}