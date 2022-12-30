import styled from 'styled-components';
import Panel from '../panel/panel';
import Title from '../title/title';
import {Img, P} from '../../styled';

export const Card = styled(Panel)`
  display: grid;
  grid-template-columns: 248px 1fr;
  column-gap: 20px;
`;

export const Image = styled(Img).attrs((props) => ({
  src: props.src,
  width: '248',
  height: '248',
  alt: props.alt
}))`
  width: 248px;
  height: 248px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  min-height: 248px;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 15px;
`;

export const Price = styled(P)`
  width: fit-content;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: bold;
  background-color: #d8ecfe;
`;
