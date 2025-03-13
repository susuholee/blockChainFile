const connectPool = require('./config');

// 전체 유저 닉네임 조회
const userNickSelectAll = async () => {
    try {
        // [ [ { nick: 'soon' } ], [ `nick` VARCHAR(10) ] ]
        // [ { nick: 'soon' },  { nick: 'soon' } ,  { nick: 'soon' } ,  { nick: 'soon' }  ]
        //  { nick: 'soon' } 
        // [ [ { nick: 'soon' } ], [ `nick` VARCHAR(10) ] ]

        // [ [ { nick: 'soon' }, { nick: 'soon2' }, { nick: 'soon3' } ], [ `nick` VARCHAR(10) ] ]
        // [ { nick: 'soon' }, { nick: 'soon2' }, { nick: 'soon3' } ]

        // 데이터가 여러개이기 때문에 
        
        const [data] = await connectPool.query('SELECT nick, imgpath FROM users');
        return data;
    } catch (error) {
        return error;
    }
}

// 유저 정보 조회
const userSelectUid = async (uid) => {
    try {
        // 데이터를 하나만 사용하는 경우
        const [[data]] = await connectPool.query('SELECT * FROM users WHERE uid=?', [uid]);
        return data;
    } catch (error) {
        return error;
    }
}

// 유저 정보 생성
const crateUser = async (uid, upw, name, nick, imgpath) => {
    try {
        await connectPool.query('INSERT INTO users (uid,upw,name,nick,imgpath) VALUES(?,?,?,?,?)', [uid, upw, name, nick, imgpath]);
        return {state : 200, message : "회원가입 완료"};
    } catch (error) {
        return error;
    }
}


module.exports = {userNickSelectAll, userSelectUid, crateUser};
