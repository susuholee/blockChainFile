import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
`;

const TextLabel = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

export default TextLabel;
