import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const SubTitle = styled.div`
  font-size: 12px;
  color: #f0a500;
`;

const Logo = () => (
  <Wrap>
    <Title>DEVEL ROCKET</Title>
    <SubTitle>관제 센터</SubTitle>
  </Wrap>
);

export default Logo;
