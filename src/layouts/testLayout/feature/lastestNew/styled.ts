import { RightArrowNext } from 'assets/icon';
import styled from 'styled-components';

export const LastestNewStyles = styled.div`
  color: #f0f0f0;
  padding-block: 80px;
  display: flex;
`;

export const LastestNewBox = styled.div`
  width: 1649px;
  margin-left: auto;
`;

export const Title = styled.div`
  width: 336px;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  text-transform: uppercase;
`;

export const LastestNewSliderBox = styled.div`
  width: 1649px;
`;
export const NewBox = styled.div`
  margin-top: 40px;
  width: 350px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NewBoxImages = styled.img`
  width: 350px;
  height: 250px;
`;

export const NewTitle = styled.div`
  margin-top: 20px;
  width: 300px;
  font-weight: 600;
  font-size: 18px;
  line-height: 31.89px;
`;

export const TechItemButtonBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const TechItemButton = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #ffffff;
`;

export const TechItemIcon = styled(RightArrowNext)`
  width: 25px;
  height: 25px;
  & path {
    fill: #f0f0f0;
  }
  border: 1px solid #f0f0f0;
  border-radius: 100%;
  padding: 5px;
`;
