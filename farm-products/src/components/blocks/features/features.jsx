import {Wrapper, List} from './styles';
import Title, {TitleSize} from '../../ui/title/title';
import Feature from '../../ui/feature/feature';
import Button from '../../ui/button/button';
import {features} from '../../../mocks/features';

function Features() {
  return (
    <section>
      <Wrapper>
        <Title as="h2" size={TitleSize.MEDIUM}>
          Почему фермерские продукты лучше?
        </Title>

        <List>
          {features.map((feature) =>
            <Feature key={feature.id} feature={feature} />
          )}
        </List>

        <Button link='/buy'>Купить</Button>
      </Wrapper>
    </section>
  );
}

export default Features;
