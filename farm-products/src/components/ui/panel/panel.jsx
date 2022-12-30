import styled from 'styled-components';

const Panel = styled.div`
  margin-bottom: ${(props) => props.marginBottom || 0}px;
  padding: 0 ${(props) => props.padding || 20}px;
  padding-top: ${(props) => props.paddingTop || 20}px;
  padding-bottom: ${(props) => props.paddingBottom || 20}px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow:
    0 10px 20px rgba(0, 0, 0, 0.04),
    0 2px 6px rgba(0, 0, 0, 0.04),
    0 0 1px rgba(0, 0, 0, 0.04);
`;

export default Panel;
