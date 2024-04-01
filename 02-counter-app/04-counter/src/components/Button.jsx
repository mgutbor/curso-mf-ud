
import styled from "@emotion/styled";

const ButtonStyled = styled.button`
  color: tomato;
  background-color: yellow;
  margin-left: 5px;
  font-size: 1.25rem;
  &:hover {
    color: yellow;
    background-color: tomato;
    cursor: pointer;
  }
`;

const Button = ({text,buttonEvent}) => {
  return (
    <ButtonStyled onClick={buttonEvent}>{text}</ButtonStyled>
  )
}

export default Button