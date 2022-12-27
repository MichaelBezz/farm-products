import styled from 'styled-components';
import {Container} from '../../styled/index';

export const HeaderSection = styled.header`
  z-index: 1;
  position: relative;
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

export const Wrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80px;
`;
