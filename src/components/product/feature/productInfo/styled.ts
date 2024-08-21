import { IconProductDesc } from 'assets';
import { PhoneCalls } from 'assets/icon';
import styled from 'styled-components';

export const ProductInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ProductInfoTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-style: normal;
`;
export const ProductRatingBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProductRatingReview = styled.div`
  line-height: 24px;
  cursor: pointer;
`;

export const ProductInfoPrice = styled.div`
  color: #111;
  font-weight: 700;
  font-size: 1.5em;
`;

export const ProductInfoContentBox = styled.div`
  display: flex;
  gap: 20px;
`;

export const ProductInfoContentTitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-style: normal;
  width: 120px;
`;

export const ProductInfoContent = styled.div`
  font-size: 16px;
  color: #333132;
`;

export const ProductInfoSortDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductInfoSortDescContent = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 680px;

  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    background-image: url(${IconProductDesc});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 5px;
  }
`;

export const ButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 30px;
`;

export const ButtonContent = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d72e24;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: #a51d14;
  }
`;

export const ButtonContentPhone = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d72e24;
  border: 2px solid #d72e24;
  font-size: 22px;
  font-weight: 700;
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #d72e24;
    color: #fff;

    svg {
      & path {
        fill: #fff;
      }
    }
  }
`;

export const IconPhone = styled(PhoneCalls)`
  width: 20px;
  margin-right: 20px;

  & path {
    fill: #d72e24;
  }
`;
