import styled from "styled-components";
import {Container, P} from '../../styled';

export const FooterSection = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
  padding: 0 86px;
`;

export const CopyRight = styled(P)`
  padding: 10px 0;
`;
