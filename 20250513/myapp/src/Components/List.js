import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getList } from '../Api/List'

const List = () => {
  const {
    data, // 요청한 데이터가 할당
    hasNextPage, // 다음 페이지가 있는지 여부를 표현하는 boolean 값
    fetchNextPage, // 다음 페이지의 요청을 호출하는 함수
    isFetchingNextPage // 다음 페이지가 로딩 되었는지 여부를 표현하는 boolean 값
  } = useInfiniteQuery({
    queryKey : ["list"],
    queryFn : getList, // 함수값 전달
    initialPageParam : 1, // 최초에 호출할때 매개변수로 전달할 초기값, 객체를 전달
    // getNextPageParam : 함수의 값을 할당, 페이지에서 지금까지 모든 페이지의 내용을 받아서 다음 페이지 번호를 반환
    getNextPageParam : (lastPage, allPage) => {
      // lastPage : 마지막으로 가져온 데이터
      // allPage : 지금까지 가져온 모든 데이터
      // 다음 페이지가 있는지 여부를 판단하기위해서 사용하는 콜백함수
      return allPage.length < 4 ? allPage.length + 1 : undefined;
      // undefined를 반환하면 더이상 페이지가 없는것 요청하지 않음

    }
  })

  useEffect(() => {
    console.log(data)
  }, [data])

  if(!data) return <>...Loading</>
  return (
    <div>
      {/* 일부 리스트만 보이고 버튼을 누르면 다음번 몇개 까지 보이는 리스트 다음번 리스트의 갯수가 있는지를 확인하고 가져옴*/}
      {data.pages.map((el) => <>
          {el.map((item, index) => <div key={"list-" + index}>
              <div>List : {item.id} </div>
          </div>)}
      </>)}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
        {isFetchingNextPage ? "로딩중" : hasNextPage ?  "더보기" : "데이터가 없어요!"}
        </button>
    </div>
  )
}

export default List
