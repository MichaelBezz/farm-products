import styled, {css} from 'styled-components';
import {Ul} from '../../styled';
import {Button} from '../../styled';

export const TabSection = styled.div`
  margin-bottom: 10px;
`;

export const TabList = styled(Ul)`
  display: flex;
  margin-bottom: 16px;
`;

export const TabItem = styled.li`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

export const TabButton = styled(Button)`
  padding: 8px 10px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 400;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: ${(props) => props.$isSelect ? 'default' : 'pointer'};
  ${(props) => props.$isSelect
    ? css`
        color: ${props.theme.colorWhite};
        background-color: #88aa4d;
      `
    : css`
        color: ${props.theme.colorForText};
        background-color: #f7f7f7;
      `}
`;

export const Content = styled.div`
  font-size: 14px;
  text-align: left;
  max-height: ${(props) => props.$maxContentHeight || "none"};
  overflow-y: overlay;
`;
