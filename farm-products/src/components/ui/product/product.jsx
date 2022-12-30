import {Card, Image, Content, StyledTitle, Price} from './styles';
import {TitleSize} from '../title/title';
import Tabs from '../tabs/tabs';
import OptionsList from '../option-list/option-list';

function Product({product}) {
  const tabsList = [
    {
      title: "Oписание",
      content: product.description
    },
    {
      title: "Характеристики",
      content: <OptionsList list={product.specifications} />
    },
    {
      title: "Свойства",
      content: <OptionsList list={product.structure} />
    }
  ];

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
      <Content>
        <StyledTitle as="h3" size={TitleSize.SMALL}>
          {product.name}
        </StyledTitle>
        <Tabs tabsList={tabsList} />
        <Price>
          {product.price} руб. / {product.weight} гр.
        </Price>
      </Content>
    </Card>
  );
}

export default Product;
