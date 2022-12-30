import styled, {css} from 'styled-components';
import {Swiper} from 'swiper/react';
import {Container, P} from '../../styled';
import checkboxIcon from '../../../assets/checkbox-icon.svg';

export const StyledMain = styled.main`
  background-color: ${(props) => props.theme.colorGray};
  overflow: hidden;
`;

export const Wrapper = styled(Container)`
  position: absolute;
  top: 80px;
  right: 0;
  bottom: 80px;
  left: 0;
  display: grid;
  grid-template-columns: 353px 1fr;
  column-gap: 20px;
  padding: 40px 90px 0;
`;

export const Form = styled.form`
  max-height: 100%;
  padding-bottom: 40px;
  overflow-y: scroll;
`;

export const Fieldset = styled(P)`
  margin-bottom: ${(props) => props.$marginBottom || 20}px;
  ${(props) => props.$column
    ? css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `
    : css`
      display: block;
    `
  }
`;

export const AddressInput = styled.input.attrs(() => ({
  type: 'text'
}))`
  display: flex;
  width: 100%;
  padding: 14px 12px;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) => props.theme.colorForText};
  background-color: ${(props) => props.theme.colorGray};
  border: 1px solid rgba(0, 0, 0, 0.1);

  ::placeholder {
    color: ${(props) => props.theme.colorForText};
  }
`;

export const AddressLabel = styled.label``;

export const PriceLabel = styled.span`
  font-size: 14px;
  line-height: 1.5;
`;

export const PriceValue = styled.span`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
`;

export const CheckboxLabel = styled.span`
  position: relative;
  display: flex;
  min-height: 56px;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    position: absolute;
    right: 0;
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: #fc9b27;
            background-image: url(${checkboxIcon});
            background-repeat: no-repeat;
            background-position: center;
          `
        : css`
            background-color: #f7f7f7;
          `}
  }
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;
