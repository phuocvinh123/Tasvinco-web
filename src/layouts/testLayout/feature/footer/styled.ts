import { Facebook, Insta, RightArrowNext, Twitter } from 'assets/icon';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  background-color: #57606f;
`;

export const FooterStyles = styled.div`
  width: 1411px;

  margin-inline: auto;
`;

export const FooterBox = styled.div`
  padding-block: 80px;
  display: flex;
  gap: 40px;
  color: #f0f0f0;
`;

export const FooterLeft = styled.div``;

export const FooterLeftTitles = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 32.81px;
`;

export const FooterLeftContent = styled.div`
  margin-top: 20px;
  width: 659px;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
`;
export const TechItemButtonBox = styled.div`
  margin-top: 20px;
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

export const FooterRights = styled.div``;

export const FooterRightTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
`;

export const FooterRightContentBox = styled.div`
  display: flex;
  gap: 40px;
  margin-top: 20px;
`;
export const FooterRightContent = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
`;

export const FooterRightIconBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const createIconComponent = (IconComponent, size = 20, color = 'white', cursor = 'pointer', m = -20) => {
  return styled(IconComponent)`
    width: ${size}px;
    height: ${size}px;
    cursor: ${cursor};
    margin-bottom: ${m}px;
    & path {
      fill: ${color};
    }
  `;
};

export const IconFacebook = createIconComponent(Facebook, 15);
export const IconTwitter = createIconComponent(Twitter);
export const IconInsta = createIconComponent(Insta);
