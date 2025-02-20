// alloc  버퍼 객체를 만들면서 size 10인 버퍼 객체를 만든다. (10 byte)
const buf = Buffer.alloc(10);
// from () : 버퍼를 만드는데 어떤 내용으로 만들건지
const buf2 = Buffer.from('hello');
const buf3 = Buffer.from('안녕');
// console.log(buf);
// buffer. toString() : 바이너리 데이터를 문자열로 인코딩
// console.log(buf2.toString()); 
// console.log(buf3.toString());

// 빈공간의 버퍼에 내용을 넣은 것.
buf.write("aaaasㅁㅋㅊㅋㅌㅋㅊㅋㅌㅊ");
console.log(buf.toString());

let a = "A";
let b = 12;
// 아스키 코드로 변환
// charCodeAt() : 인덱스 번호로 매개변수 전달.
// charCodeAt 아스키 코드 숫자를 표현 === 65
// toString () : 문자열로 변환하면서 2진수로 변환한다. === 1000001
// padStart () === 매개변수로 전달한 첫 번째 값의 길이의 문자가
// 아니면 앞에 8자리가 아니면 0으로 채운다. 
a =  a.charCodeAt(0).toString(2).padStart(8,"0");
console.log(a);
b = b.toString(2).padStart(8, "0");

let c = a + b;
console.log(c);

// utf-8은 8bit씩 인코딩을 하는 것
// // 한글로 변환하는 메서드를 작성해보자
// const str = "가나다라마바사";
// // substr () : 문자열을 잘라서 반환
// console.log(str.substring(2 , 4));

const binaryToString = (binary) => {
    let result = "";
    // utf-8의 형식으로 8씩 잘라서 인코딩
    for (let i = 0; i < binary.length; i += 8) {
        // 2진수를 정수로 변환
        // substr() : 문자열의 어느 해당 위치를 변환
        // parseInt () : 매개변수로 전달한 정수로 변환을 하는데
        // 두 번째 매개변수로 값을 전달하면 어떤 형식의 문자열을 변환하는지 알 수 있다.

        // parsInt("10101010", 2) === 2진수의 문자열을 정수로 변환하겠다.
        const temp = parseInt(binary.substr(i, 8), 2) // temp 에는 정수로 받음
        // String.fromCharCode : 아스키 코드를 문자열로 변환
        // 아스키 코드의 변환시 값이 없으면
        // console.log(temp, "temp");
        // console.log(String.fromCharCode(temp), "fromCharCode"); 
        // 정수형으로 변환했을 때 아스키 코드로 변환이 가능하면
        // 아스키 코드로 변환한 문자열로 추가하고 정수의 숫자로 추가
        // 아스키 코드가 아닐 때 는 정수로 추가
        if(String.fromCharCode(temp) == false) {
            result += temp;
            console.log(result, "temp");
        }
        result += String.fromCharCode(temp); // result 에 temp를 변환
        console.log(result, "result");

    }
    return result;
}
console.log(binaryToString(c));
