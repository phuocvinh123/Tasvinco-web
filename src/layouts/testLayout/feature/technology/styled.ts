import { RightArrowNext } from 'assets/icon';
import styled from 'styled-components';

export const TechnologyStyles = styled.div`
  background-color: #161616;
  color: #f0f0f0;
`;
export const TechnologyBox = styled.div`
  padding-top: 550px;
  width: 1411px;
  margin-inline: auto;
`;

export const TechnologyTitles = styled.div`
  font-weight: 800;
  font-size: 70px;
  line-height: 105px;
  text-align: center;
  margin-bottom: 20px;
`;

export const TechItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: center;
`;

export const TechItemImages = styled.img`
  width: 420px;
  height: 489px;
`;
export const TechItemContentBox = styled.div`
  margin-top: 40px;
`;

export const TechItemContentBoxTitles = styled.div`
  width: 525px;
  font-weight: 600;
  font-size: 28px;
  line-height: 38.97px;
`;

export const TechItemContentBoxContent = styled.div`
  margin-top: 20px;
  width: 525px;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
`;

export const TechItemButtonBox = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-top: 20px;
`;

export const TechItemButton = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
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
