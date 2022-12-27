import styled from "styled-components";
import {Container, Ul} from '../../styled';

export const Wrapper = styled(Container)`
  display: grid;
  justify-items: center;
  row-gap: 64px;
  padding: 100px 90px;
`;

export const List = styled(Ul)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;
