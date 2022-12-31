import styled from 'styled-components';
import Button from '../../ui/button/button';

export const StyledButton = styled(Button)`
  position: relative;
  min-width: 0;
  width: auto;
  font-size: 18px;
  line-height: 1;
  color: ${(props) => props.theme.colorForText};
  background-color: ${(props) => props.theme.colorWhite};

  &::after {
    position: absolute;
    right: 16px;
    bottom: 10px;
    left: 16px;
    content: "";
    height: 1px;
    background-color: ${(props) => props.theme.colorForText};
    transition: opacity 0.2s ease-out;
    opacity: 0;
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colorWhite};

    &::after {
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: none;
  }
`;
