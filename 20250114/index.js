    console.time(); // 여기서부터 시간의 시작
     // 코드의 실행시간이 이 사이에 작성한 코드 내용
    let result = 0;
    for(let i = 1; i <= 100; i++){
        result += i;
    }
    console.log(result);
    console.timeEnd(); // 여기서 시간 종료

    console.time(); 
    let n = 100;
    console.log((n / 2) * (n + 1));
    console.timeEnd();

    console.time();

    function sum(n, result) {
        if(n == 101) {
            return result;
        }
        return sum(n + 1, result + n); // 반환하는데 n의 값이 101이 될때까지 재귀 함수가 호출할 때마다 1부터 100까지 더한다.

    } 
    console.log(sum(1,0));
    console.timeEnd();

    // 피보나치 수열 
    console.time();
    function fibo(n){
        if(n === 1 || n === 2) return 1;
        return fibo(n - 1) + fibo(n - 2);
    }
    console.log(fibo(25));
    console.timeEnd();

    // 재귀 함수가 콜스택에 많이 쌓여서 실행이 많아져서 메모리가 부족해진다.
    // 메모이제이션 기법*** 
    // 연산을 할때 이미했던 연산이라면 다시연산을 하지않고 결과를 저장해놨다가 결과만 보여주면 끝
    
    // 메모이제이션 기법 사용 예)
    console.time();

    let memo = {}; // 연산의 내용을 저장할 객체

    // 예약어 in
    // 객체안에 해당 키가 있는지 확인
    // [키이름] in [객체]
    // Boolean 타입으로 true와 false를 반환
    // 키의 유무에 따라 이미했던 연산인지 판별해서 연산을 할지 이전에 저장한 값을 반환할지 정하는 것

    function newFibo(){
        let result; // 결과를 담을 변수

        // 상태 확인 연산을 했던 연산인지
        if( n in memo){
            // 키값이 있다 true -> 연산을 한것
            result = memo[n]; // 결과 값을 할당
            // memo.name
            // memo[n]
        } else {
            // 연산 했던 내용이 아니면 새로운 연산을 하고 연산한 결과를 저장
            if(n === 1 || n === 2){
                result = 1;
            } else {
                result = newFibo(n - 1) + newFibo(n - 2);
            }

            // n의 키를 생성하고 값을 할당
            // 연산의 결과를 저장
            memo[n] = result;
        }
        return result;
    }
    console.log(newFibo(100))
    console.timeEnd();

