import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const StyledButton = styled(Link)`
  display: block;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  padding: 17px 16px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  line-height: ${(props) => props.theme.lineHeightDefault};
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  border: 0;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
  }
`;

