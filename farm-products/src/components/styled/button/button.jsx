import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 0 24px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  text-align: center;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  border: 0;
  cursor: pointer;
`;

export default Button;
