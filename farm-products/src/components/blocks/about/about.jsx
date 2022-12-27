import {Section, Wrapper, Description, TitleAbout, Text, ImageWrapper, FarmerAbout} from './styles';
import {TitleSize} from '../../ui/title/title';

function About() {
  return (
    <Section>
      <Wrapper>
        <Description>
          <TitleAbout size={TitleSize.BIG}>
            Магазин фермерских продуктов с доставкой
          </TitleAbout>
          <Text>
            Все продукты изготавливаются под заказ.
            Фермеры начинают готовить продукты за день до отправки заказа клиентам.
            Именно поэтому мы принимаем заказы заранее и доставляем продукты максимально свежими.
          </Text>
        </Description>

        <ImageWrapper>
          <FarmerAbout />
        </ImageWrapper>
      </Wrapper>
    </Section>
  );
}

export default About;
