import React from 'react';
import { LOGOUT } from '../../Store/useReducer';

const Logout = ({ dispatch }) => {
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return <button onClick={logout}>로그아웃</button>;
};

export default Logout;
