import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  font-size: 16px;
`;

const Input = (props) => {
  return <StyledInput {...props} />;
};

export default Input;
