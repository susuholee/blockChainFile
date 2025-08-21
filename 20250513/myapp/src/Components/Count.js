import React, { useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getCount, setCount , updateCount} from '../Api/count'

const Count = () => {
    const queryClient = useQueryClient(); // useQueryClient() :


    const {data, isLoading, refetch} = useQuery({
        // data : 성공적으로 가져온 데이터
        // refetch : 수동으로 다시 데이터를 가져오는 함수
        queryKey : ['count', 'uid', 'nick'], // 캐시 데이터의 고유 식별자
        queryFn : getCount, // 비동기 처리의 로직을 가지고 있는 Api 요청 함수
        refetchOnMount : true, // 최초에 요청을 실행할 것인지, 
        // 추가 속성이고 기본속성 이후에 추가속성도 쿼리를 호출할때 작성할 수 있다.
        refetchOnWindowFocus : false, // 재요청을 보내는데 다른 창 혹은 다른 탭을 다녀오면 재요청을 보낼것인지
        enabled : true, // 재요청을 수동으로 처리할 것인지, 아닌것인지
        retry : 10
        // 루틴
        // 1. 최초에 요청을 보내고 캐시 저장
        // 2. 점점 데이터가 썩어가면서 썩으면 재요청(도중에는 이전 캐시 데이터를 보여주고 있는 상태)
        // 3. 백그라운드에서 캐시를 업데이트하고
        // 4. 최종적으로 서버 상태를 업데이트한다
    });

    // useQuery () : 서버 상태의 관리를 하는 기능을 제공하는 함수, 데이터 조회의 목적을 가지고 있다.
    // 서버상태의 조회, 로딩 응답받은 데이터 상태 관리


    // count 이런 캐시 데이터의 식별자가 겹치면 안된다.
    // 캐시 식별자는 캐시 무효화에서도 사용된다.

    // useMutation() : POST,PUT,DELETE 요청을 보낼때 사용하는 함수
    // 즉 서버에 데이터를 보내서 요청할때때

    // 요청하는 시점 데이터가 있고, 데이터를 요청객체에 담아서 요청
    const mutation = useMutation({
        mutationFn : {setCount, getCount, updateCount}, // 요청 함수를 전달하는 키
        onSuccess : () => {
            console.log("성공!!");
            // 캐시 무효화
            // 쿼리 업데이트
            // 신선한 데이터의 상태여도 가능한 방법
            // queryClient.invalidateQueries({ queryKey : ['count']})

            // 캐시가 썩었다
            refetch();
        },
        onError : () => {
            console.log("에러!!")
        },
        onSettled : () => {
            // 디버깅 가능, 전달하는 매개변수를 받는 콜백 함수
            console.log("맨 마지막에 호출 로직")
        },
        onMutate : (data) => {
            console.log("onMutate :", data)
        }
    })

    useEffect(() => {
        console.log(mutation);
    }, [mutation])
    if(isLoading) return <>...Loading</>

  return (
    <div>
        카운트 : {data.count || 0}
        uid :  {data.uid || "사용자 정보 없음"}
        nick :  {data.nick || "닉네임 없음"}
        <button onClick={() => mutation.mutate(1)}>증가</button>
    </div>
  )
}

export default Count
