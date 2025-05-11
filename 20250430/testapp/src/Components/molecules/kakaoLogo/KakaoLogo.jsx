import React from 'react'
import styled from 'styled-components'
import {kakaoImg} from '../../../images/index'

const Wrap = styled.div`
  width: 311px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Logo = styled.img`
  height: 100%;
`;

const KakaoLogo = () => {
  return (
    <Wrap>
      <Logo src={kakaoImg} alt="kakao" />
    </Wrap>
  );
};


export default KakaoLogo
