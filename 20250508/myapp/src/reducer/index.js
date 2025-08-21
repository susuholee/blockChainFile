import orderReducer from './orderReducer';
import userReducer from './userReducer';
import { combineReducers } from 'redux';
// combineReducers : 여러개의 리듀서를 하나로 키값으로 구분해서 객체로 생성

export const reducer = combineReducers({userReducer, orderReducer})