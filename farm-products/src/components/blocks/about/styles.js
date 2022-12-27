import styled from 'styled-components';
import {Container, Img, P} from '../../styled/index';
import farmerAbout from '../../../assets/farmer-about.svg';
import Title from '../../ui/title/title';

export const Section = styled.section`
  background-color: ${(props) => props.theme.colorForAboutBackground};
`;

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 37px
`;

export const Description = styled.div`
  max-width: 538px;
  padding-top: 148px
`;

export const TitleAbout = styled(Title)`
  margin-bottom: 24px;
`;

export const Text = styled(P)``;

export const ImageWrapper = styled.div`
  justify-self: end;
  width: 446px;
  height: 563px;
`;

export const FarmerAbout = styled(Img).attrs(() => ({
  src: farmerAbout,
  width: "446",
  height: "563",
  alt: "Довольный фермер."
}))``;
