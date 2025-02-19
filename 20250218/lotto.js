// 모듈화의 장점 유지보수가 좋다.
const lottoNum = [];
const result = [];
const init = () => {
    for (let i = 0; i <= 45; i++) {
        lottoNum.push(i);
    }
}

const play = () => {
    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * lottoNum.length);
        result.push(lottoNum[random]);
        lottoNum.splice(random, 1);
    }
}

init();
play();
console.log(result)
// 객체로 내보내는 방법
module.exports = { lottoNum, result, init, play };
// 키값을 생성해서 내보내는 방법
// module.exports.lottoNum = lottoNum
