import {HeaderSection, Wrapper} from './styles';
import Logo from '../../ui/logo/logo';
import Nav from '../../layout/nav/nav';

function Header() {
  return (
    <HeaderSection>
      <Wrapper>
        <Logo />
        <Nav />
      </Wrapper>
    </HeaderSection>
  );
}

export default Header;
