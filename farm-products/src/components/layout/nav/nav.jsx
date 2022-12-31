import {useLocation} from 'react-router-dom';
import Button from '../../ui/button/button';
import {StyledButton} from './styles';
import {Ul} from '../../styled';
import {AppRoute} from '../../../constants';

const links = [
  {to: AppRoute.MAIN, item: <StyledButton link={AppRoute.MAIN}>Главная</StyledButton>},
  {to: AppRoute.ORDER, item: <Button link={AppRoute.ORDER}>Купить</Button>}
];

function Nav() {
  const pageUrl = useLocation().pathname;

  return (
    <nav>
      <Ul>
        {links
          .filter((link) => link.to !== pageUrl)
          .map((link) => (
            <li key={link.to}>{link.item}</li>
          ))}
      </Ul>
    </nav>
  );
}

export default Nav;
