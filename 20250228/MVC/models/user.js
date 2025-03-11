// 임시 데이터 베이스
let users = []; // 유저의 정보를 저장

// 데이터를 저장
const signupUser = (username, uid, upw) => {
    users.push({username,uid, upw});
    console.log(users);
    return "저장 완료";
}

// 로그인 로직 처리 데이터를 조회
const selectUser = (uid, upw) => {
   return users.filter(e => (e.uid === uid) && (e.upw === upw)) // 일치하는 값은 하나일수 밖에 없다.
}
// 아아디 중복 체크
const selectUserId = (uid) => {
    return users.filter(e => {
        console.log(e.uid === uid)
        console.log(e.uid)
        console.log(uid)
        return e.uid === uid
    });
}

const deleteUserId = (uid) => {
    console.log(uid);
}

module.exports = {signupUser, selectUser, selectUserId, deleteUserId};