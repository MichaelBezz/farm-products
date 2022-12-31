import {useState} from 'react';
import SwiperCore, {Pagination, Scrollbar, Mousewheel} from 'swiper/core';
import {SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import {
  StyledMain,
  Wrapper,
  Form,
  Fieldset,
  AddressInput,
  AddressLabel,
  PriceLabel,
  PriceValue,
  CheckboxLabel,
  ProductSwiper
} from './styles';
import Panel from '../../ui/panel/panel';
import Title, {TitleSize} from '../../ui/title/title';
import CheckboxList from '../../ui/checkbox-list/checkbox-list';
import Button from '../../ui/button/button';
import Product from '../../ui/product/product';
import {products} from '../../../mocks/products';

SwiperCore.use([Pagination, Scrollbar, Mousewheel]);

function OrderPage() {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);
  const [address, setAddress] = useState('');

  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price), 0
  );

  const handleOnClickProduct = (value, index) => {
    if (!selectProductIds.includes(value)) {
      swiperRef.slideTo(index, 0);
    }
  };

  const handleBuyClick = () => {
    alert(
      `Спасибо за заказ, вы купили:\n${selectProducts.map(
        (product) => `${product.name} - ${product.price} руб.\n`
      )}
      Итого: ${fullPrice} руб.
      Доставка по адресу: ${address}.`
    );
  };

  return products && products.length ? (
    <StyledMain>
      <Wrapper>
        <Form>
          <Panel marginBottom={20}>
            <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={12}>
              Выберите продукты
            </Title>

            <CheckboxList
                labelComponent={CheckboxLabel}
                name={"select-products"}
                options={products.map((product) => ({
                  value: product.id,
                  title: product.name
                }))}
                selectValues={selectProductIds}
                onChange={setSelectProductIds}
                onClickLabel={handleOnClickProduct}
              />
          </Panel>

          <Panel>
            <Title as="h2" size={TitleSize.EXTRA_SMALL} marginBottom={24}>
              Сделать заказ
            </Title>

            <Fieldset>
              <AddressInput
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                placeholder="Введите адрес доставки"
              />
              <AddressLabel className="visually-hidden" htmlFor="address">Ваш адрес.</AddressLabel>
            </Fieldset>

            <Fieldset $column $marginBottom={32}>
              <PriceLabel>Цена</PriceLabel>
              <PriceValue value={fullPrice} />
            </Fieldset>

            <Button
              $maxWidth
              disabled={!(selectProductIds.length && address)}
              onClick={handleBuyClick}
            >
              Купить
            </Button>
          </Panel>
        </Form>

        <ProductSwiper
          direction="vertical"
          spaceBetween={12}
          slidesPerView="auto"
          pagination={{type: "fraction"}}
          scrollbar={{draggable: true}}
          mousewheel
          onSwiper={setSwiperRef}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
        </ProductSwiper>

      </Wrapper>
    </StyledMain>
  ) : (
    "Продукты были слишком вкусные и их разобрали."
  );
}

export default OrderPage;
