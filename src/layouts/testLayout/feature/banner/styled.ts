import styled from 'styled-components';

export const BannerStyles = styled.div`
  background-color: #57606f;
  position: relative;
  padding-bottom: 160px;
`;

export const BannerBox = styled.div`
  width: 1411px;
  margin-inline: auto;
  padding-top: 80px;
  padding-bottom: 160px;
`;

export const BannerTitle = styled.div`
  color: #f0f0f0;
  font-size: 48px;
  font-weight: 600;
  width: 717px;
  position: relative;
  z-index: 1;
`;

export const BannerContent = styled.div`
  width: 613px;
  font-weight: 400px;
  font-size: 20px;
  color: #f0f0f0;
  margin-top: 20px;
  position: relative;
  z-index: 1;
`;

export const BannerButton = styled.div`
  width: 256px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  background-color: #f0f0f0;
  color: black;
  text-align: center;
  padding: 12px 30px;
  position: relative;
  z-index: 1;
`;

export const BannerImage = styled.img`
  position: absolute;
  width: 1012px;
  height: 403px;
  top: 40px;
  right: 100px;
  z-index: 0;
`;
