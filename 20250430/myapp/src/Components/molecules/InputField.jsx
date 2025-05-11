import Label from "../atoms/textlabel/TextLabel"
import Input from "../atoms/input/Input"
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const InputField = ({label, ...inputProps }) => (
  <Wrapper>
    <Label>{label}</Label>
    <Input {...inputProps} />
  </Wrapper>
);

export default InputField;
