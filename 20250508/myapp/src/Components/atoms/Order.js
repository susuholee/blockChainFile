import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Order = () => {
    // 마운트 단계에서 api호출을 통해 데이터를 받은상태
    const data = [
        { code: "A-01", name: "김치볶음밥", price: 10000 },
        { code: "A-02", name: "계란볶음밥", price: 15000 },
        { code: "A-03", name: "제육볶음밥", price: 20000 },
        { code: "A-04", name: "고등어구이", price: 30000 },
    ]

    const [select, setSelect] = useState(null);
    const [text, setText] = useState(null);
    const [contentText, setContentText] = useState(null);
    const userInfo = useSelector(state => state.userReducer.userInfo); // userInfo
    const order = useSelector(state => state.orderReducer); // 상태 객체 전체 주시
    const dispatch = useDispatch();

    const orderHandler = () => {
        if(userInfo){
            dispatch({
                type: data[select].code,
                payload: { orderName: data[select].name, price: data[select].price }
            })
        } else {
            setText("로그인 이후 이용해주세요");
        }    
    }

    useEffect(() => {
        if(order.orderName === "") return
        // 업데이트 구문
        setContentText(`주문자 ${userInfo.nick}가 맛있는 ${order.orderName}를 주문하고 결제 금액은 ${order.price}원 입니다.`);
    }, [order])

    return (
        <div>
            {text}<br />
            주문할 메뉴는 : {select ? data[select].name : "선택해주세요~"} <br />
            {data.map((el, i) => <button key={i} onClick={() =>{console.log(el); setSelect(`${i}`)}}>{el.name}</button>)}<br />
            <button onClick={orderHandler}>주문하기</button><br />
            안내 : {contentText}<br />
        </div>
    )
}

export default Order