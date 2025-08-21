// 저장소 생성
import { createStore } from 'redux';
import { reducer } from '../reducer';
// redux 툴킷 => 아토믹 전역상태 (recoil) X -> jotai


// createStore() : 매개변수에 리듀서 전달
// 저장소 생성
export const store = createStore(reducer);