import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = ({children}) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
