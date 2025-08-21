// 유저가 주문을 할 수 있는 로직

const initState = {
    orderName : "",
    price : 0
}

const reducer = (state = initState, action) => {
    const {type , payload} = action; // 구조분해 할당

    switch (type) {
        // 코드값이 들어가면 된다.
        case "A-01":{
            const {orderName, price} = payload;
            return {...state, orderName, price };
        }
        case "A-02":{
            const {orderName, price} = payload;
            return {...state, orderName, price };

        }
        case "A-03": {
            const {orderName, price} = payload;
            return {...state, orderName, price };
        }
        case "A-04": {
            const {orderName, price} = payload;
            return {...state, orderName, price };
        }

        default:
            return state;
    }
}

export default reducer;