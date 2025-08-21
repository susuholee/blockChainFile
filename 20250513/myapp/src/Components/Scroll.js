import React from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getPockList } from '../Api/Scroll'

const Scroll = () => {
const {
  data,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage
} = useInfiniteQuery({
  queryKey : ["poketmons"],
  queryFn : getPockList,
  getNextPageParam : (lastPage, allPage) => {
    const nextOffset  =  allPage.length * 20
    return lastPage ? nextOffset : undefined;
  }
})


  return (
    <div>
      <h2>포켓몬 도감 스크롤</h2>
      {data.pages.map((el) => {
        
      })}
      {/* 맨 밑에  */}
    </div>
  )
}

export default Scroll
