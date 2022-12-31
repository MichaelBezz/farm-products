import {LogoLink, LogoImage, LogoText} from './styles';
import {AppRoute} from '../../../constants';

function Logo() {
  return (
    <LogoLink to={AppRoute.MAIN}>
      <LogoImage />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
