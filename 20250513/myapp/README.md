# tanstack Query(v4 react Query)
> 비동기 관련 서버 상태를 관리하는 라이브러리

## 특징
- 백그라운드 동기화
- 쿼리 무효화
- 쿼리의 로딩 상태 관리
- 캐싱
- 리패치

### 서버 상태
- api 에서 가져오는 데이터를 관리하는 상태 값
- 데이터를 가져오는 시기를 결정하고, 캐시의 상태를 관리해서 업데이트
- 좋은 점은 캐싱으로 로드 속도를 향상, 로딩의 로직과 데이터 갱신을 처리
- 자주 갱신되거나 조회되는 데이터

> fresh한 상태와 stale 상태는 tanstack query 에서 staleTime과 cacheTime으로 표현된다. 
> 요청 이후에는 fresh한 상태 데이터가 생기고, staleTime이 시간이 지나가면 stale 상태가 된다. 이후에 refatch를 할수있는 데이터의 상태

### tanstack query를 만든 목적
> 서버의 상태를 redux를 사용하고 thunk와 saga 등 라이브러리 사용하면서 작성하니 로직이 복잡해서
> 서버의 상태를 자동화시켜서 관리하는 라이브러리를 만들고 시팓.

### tanstack query의 목차

1. Cache : 메모리 저장소, 동일한 값을 요청을 하지않고 같은 내용이면 데이터를 반환해서 사용
2. refetch : 자동으로 데이터를 요청할 것인지? 혹은 내가 호출해서 사용을 할것인지
3. query Key : 캐시 데이터의 식별자
4. Invalidation : 캐시 무효화시키고 새로운 데이터를 refetch

## 캐시
> 캐시 데이터는 자주 사용되는 데이터, 즉 이미지 혹은 api 응답 데이터를 임시로 저장해두는 메모리 공간
> 최적화 : 느린 연산을 반복하지 않기 위해서 시간이 오래걸리는 연산 작업의 데이터를 메모리에 저장해놓고 효율성을 증가

## 캐시의 동작
1. 연산을 동작하면 캐시데이터를 저장
2. 이후 부터는 캐시데이터가 있으면 재연산을 하지않고, 캐시 데이터 반환(캐시 적중), 원하는 캐시데이터를 가져오지 못했으면 (캐시 미적중)
3. 캐시 데이터가 없다면 혹은 미적중이면 캐시데이터를 다시 재 업데이트 즉 요청을 다시 보낸다.
    캐시 적중률 = (캐시 적중 횟수 / 총 데이터 요청 횟수) * 100

## 캐시를 사용했을때
> 빠른 로딩 속도 개선
> 연산 부하 절약
> 하지만 오래된 썩은 데이터가 반환될수도 있다.

### tanstack Query 문법
```sh
npm i @tanstack/react-query
```

## 초기화
```js
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

// 옵션 설정 
// new QueryClient({
//  defaultOptions : {
//        queries : {  // 캐시를 관리할때 속성
//            staleTime : 0, // 데이터가 갱신을 해야할때까지 걸리는 시간이 0초
//              retry : 0,  // 만약에 요청을 보냈는데 요청 실패시 재요청할 횟수
//       }
//  }
// }); 매개변수에 객체를 전달
const queryClient = new QueryClient(); // 새로운 생정자 함수 생성, 시스템 객체
// react-query를 사용할때 필요한 내용이 할당되어있는 객체가 생성된다.
// 상태를 관리하기 위한 정의가 되어있음

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Components /> 
        </QueryClientProvider>
    )
}
```

### react-query 강점, 강력한 개발 툴 제공
```sh
npm i -D @tanstack/react-query-devtools
```
> 개발할때만 사용하는 라이브러리, 실제 빌드에서는 포함되지 않게 설치
> 캐시데이터의 동향을 확인할 수 있다. 요청에 대한 서버상태 또한.

> initialIsOpen === 판넬이 열러있을지 초기에
> 개발 의존성으로 설치 해야한다.

```js
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Components /> 
            <ReactQueryDevtools initialIsOpen={true} buttonPostion={"bottom-right"} >
        </QueryClientProvider>
    )
}
```
### 카운트
> 카운트 API 만들기

> Todo-List 

> 무한 스크롤

백엔드 구성
```sh
npm init -y

# 설치 라이브러리
npm i express cors
```