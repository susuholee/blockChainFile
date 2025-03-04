// from() : 문자열을 버퍼로 변경
const buffer = Buffer.from("나는 버퍼입니다.");
console.log(buffer);
console.log(buffer.length); // buffer의 길이
console.log(buffer.toString()); // 버퍼를 다시 문자열로 변환


// Buffer.concat()
// 배열에서 조각난 버퍼를 합칠 수 있다.
const bufferArr = [Buffer.from('안녕'), Buffer.from('나는'), Buffer.from('수호')];
// 버퍼를 합친 후, 문자열로 변환
console.log(Buffer.concat(bufferArr).toString());

// Buffer.alloc() 
// 빈 버퍼를 생성하고, 버퍼의 크기를 지정할 수 있다.
console.log(Buffer.alloc(10));

