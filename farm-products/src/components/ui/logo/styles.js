import styled from 'styled-components';
import {Img, P} from '../../styled/index';
import farmerLogo from '../../../assets/farmer-logo.svg';

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  line-height: 1.14;
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.colorForText};
`;

export const LogoImage = styled(Img).attrs(() => ({
  src: farmerLogo,
  width: "44",
  height: "44",
  alt: "Логотип."
}))`
  width: 44px;
  height: 44px
`;

export const LogoText = styled(P)`
  margin-left: 24px;
`;
