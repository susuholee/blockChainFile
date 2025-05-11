import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  margin-right: 127px;
`;


const CloseIcon = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.8;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 11px;
    top: 2px;
    height: 20px;
    width: 2px;
    background-color: #000;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const Close = () => {
  return (
    <Wrap>
      <CloseIcon />
    </Wrap>
  );
};

export default Close;
