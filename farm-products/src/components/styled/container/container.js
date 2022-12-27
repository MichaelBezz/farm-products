import styled from 'styled-components';

const Container = styled.div`
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.pagePadding};
`;

export default Container;
