import Logo from '../../ui/logo/logo';
import {FooterSection, Wrapper, CopyRight} from './styles';

function Footer() {
  return (
    <FooterSection>
      <Wrapper>
        <Logo />
        <CopyRight>Создано 2022</CopyRight>
      </Wrapper>
    </FooterSection>
  );
}

export default Footer;
