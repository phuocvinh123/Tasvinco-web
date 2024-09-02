import styled, { css } from 'styled-components';

export const ProductFooterBox = styled.div`
  width: 80%;
  margin-inline: auto;
  background-color: #fafafa;
`;
export const ProductTags = styled.div`
  padding: 20px;
  margin-inline: 20px;
  display: flex;
  gap: 40px;
  border-bottom: 1px solid #e4e4e4;
  margin-bottom: 40px;
`;

interface NawItemBoxProps {
  isSelected: boolean;
}

export const ProductTagsContentBox = styled.div<NawItemBoxProps>`
  cursor: pointer;
  position: relative;

  &:hover {
    & > div {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -20px;
        height: 2px;
        background-color: #d72e24;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease;
      }

      &:hover::after {
        transform: scaleX(1);
      }
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      & > div::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -20px;
        height: 2px;
        background-color: #d72e24;
        transform: scaleX(1);
        transform-origin: center;
        transition: transform 0.3s ease;
      }
    `}
`;

export const ProductTagsContent = styled.div`
  font-size: 16px;
  text-transform: none;
  padding-bottom: 6px;
  position: relative;
`;
