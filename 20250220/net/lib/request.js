// 요청을 받은 메시지를 객체로 변환
// SPACE 는 상수로 선언
const SPACE =  " "; // 빈공백
// NEW_LINE 은 새로운 라인
const NEW_LINE =  "\r\n" // 한줄 내린 것.
const Two_LINE = NEW_LINE + NEW_LINE // body 내용 판단 할때
const START_LINE_NAMES = ["method", "url", "version"];

// 쿼리 문자열 파싱
const getQuery = (queryString) => {
    if(queryString.length === 0) return null;
    // index=1&age=2
    const query = queryString.split("&")
    // [index=1, age=2]
    const query2 = query.map((value) => value.split("="))
    // [[index,1], [age, 2]]
    const query3 = query2.reduce((acc, line) => {
        const [key, value] = line;
        acc[key] = value; // acc에 key에 value 추가
        return acc;
    }, {})
    // { index : 1, age : 2}
    return query3;
}

// 요청 데이터의 시작 라인 추출 할 함수
const getStartLine =  (startLineString) => {
    // GET /shop HTTP/1.1
    // [GET , /shop, HTTP/1.1]
    const startLine1 = startLineString.split(SPACE);
    // value에 index 인덱스 배열로 GET[0], /shop[1], HTTP/1.1[2]

    // [["method", "GET"], ["url", "/shop"], ["version", "HTTP/1.1"]]
    const startLine2 = startLine1.map((value, index) => [START_LINE_NAMES[index], value]);
    // 객체로 변환
    // reduce ()
    // 이전의 값 , 순회중인 요소, 인덱스 값
    const startLine3 = startLine2.reduce((acc, line, index) => {
        const [key, value] = line;
        // 대괄호 표기법으로 해야 키에 값을 전달할 수 있다.
        acc[key] = value;
        return acc;
    }, {})
  
    // {"method" : "GET", "url" : "/shop", "version" : "HTTP/1.1"}
    // {"method" : "GET", "url" : "/shop?index=1, "version" : "HTTP/1.1"}

    // 쿼리 스트링이 있는 경우
    // 쿼리 스트링이 포함되어 있는지 여부를 판단하고 키를 추가해주면 된다.
    const querystringEndIndex = startLine3.url.indexOf("?");
    // console.log(querystringEndIndex);
    // 쿼리 스트링이 있으면
    const isQuery = querystringEndIndex !== -1;
    if(isQuery) {
        // 쿼리 문자열을 객체로 변환
        const queryString = startLine3.url.slice(querystringEndIndex + 1);
        // index=1
        // 쿼리 문자열 처리
        const query = getQuery(queryString) // quertstring을 getquery에 전달하여 객체로 파싱해서 가져온다.
        startLine3.query = query;
        startLine3.url = startLine3.url.slice(0, querystringEndIndex)
     
    }
    return startLine3;
}



// const a = [1,2,3,4,5,6];
// a.reduce((acc, value, index) => {
//     console.log(acc)
//     console.log(value, " : ", index)
//     acc[value] = index
//     return acc;
// }, {})

// 두 번째 매개변수가 있고, 없고의 차이가 있는데 배열의 요소의 첫번째를 할당하고, 두 번째 요소부터 순회
// 값이 있으면 초기값으로 두 번째 매개변수를 할당하고, 첫 번째 요소부터 진행
// 첫 번째 매개변수에 이전 값을 전달하기 위해서는 콜백함수에서 반환된 값으로 재할당 된다.

// 헤더의 정보를 만들 함수
const getHeaders = (headerString) => {
    const headerLine = headerString.split(NEW_LINE);
    // 줄마다 배열의 구분으로 추가해서 배열의 요소는 한줄 한줄 하나의 요소로 포함된다.
    // shift () : 배열에서 첫 번째 인덱스 요소를 내보낸다.
    // 주소에 있는 원본 배열 수정하고 반환값은 원본에서 제거되는 첫 번째 요소의 값 
    const startLineString = headerLine.shift();
    const startLine = getStartLine(startLineString);
    // 헤더의 가장 중요한 메시지는 첫 번째 라인
    // console.log(headerLine);
    // 헤더의 나머지 값을 객체로 변환 
    const headers =  headerLine.reduce((acc, line) => {
        const [key, value] = line.split(": "); // ['Host', 'localhost:3000']
        acc[key] = value; 
        return  acc; // 힘수에 반환 값은 리턴,리턴이 없으면 undefined
    }, {})
    // console.log(headers);
    
    // 여러개의 값을 내보내는 경우
    return {
        startLine, headers
    }

    /*
         { startLine : startLine , headers : headers }
         { startLine , headers} 
    */
}

// 헤더의 마지막 인덱스
const getHeaderEndIndex = (request) => request.indexOf(Two_LINE);


// 최종적으로 데이터의 파싱을 하는 함수
// 나눠져서
const getRequest = (buffer) => {
    const headerEndIndex = getHeaderEndIndex(buffer);
    const isHeaderPending = headerEndIndex === -1;
    // 요청 메시지가 전부 전송이 되었는지 확인
    if(isHeaderPending) return null;

    // const a = [1,2,3];
    // const [b, ...c] = a;
    const [headerString, ...bodyString] = buffer.toString().split(Two_LINE);
    const body = bodyString.join(Two_LINE); // body를 하나의 문자열로 변환
    const header = getHeaders(headerString); 
    return { header, body} 

}

exports.request = { getRequest};