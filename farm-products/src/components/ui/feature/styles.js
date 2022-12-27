import styled from 'styled-components';
import {Img, P} from '../../styled';

export const Item = styled.li`
  min-height: 197px;
  padding: 20px;
  background-color: ${(props) => (props.isNegative ? "#f8ddd7" : "#e1edce")};
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 56px 1fr;
  justify-items: start;
  column-gap: 20px;
  row-gap: 4px;
  margin-bottom: 16px;
`;

export const Icon = styled(Img).attrs((props) => ({
  src: props.src,
  width: "56",
  height: "56",
  alt: props.alt
}))`
  grid-column: 1/2;
  grid-row: 1/3;
  width: 56px;
  height: 56px;
`;

export const Owner = styled(P)`
  padding: 4px 10px;
  font-size: 14px;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => (props.isNegative ? "#f75531" : "#88aa4d")};
`;

export const Text = styled(P)``;
