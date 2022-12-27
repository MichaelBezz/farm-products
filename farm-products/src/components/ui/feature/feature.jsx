import Title, {TitleSize} from '../../ui/title/title';
import {Item, Header, Icon, Owner, Text} from './styles';

function Feature({feature}) {
  return (
    <Item isNegative={feature.isNegative}>
      <Header>
        <Icon src={feature.icon} alt={feature.title} />
        <Owner isNegative={feature.isNegative}>{feature.owner}</Owner>
        <Title as="h3" size={TitleSize.EXTRA_SMALL}>{feature.title}</Title>
      </Header>

      <Text>{feature.text}</Text>
    </Item>
  );
}

export default Feature;
