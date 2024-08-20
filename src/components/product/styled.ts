import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitleBox = styled.div`
  width: 100%;
  background-color: #e3e3e3;
  align-items: center;
`;

export const ProductPageTitleBox = styled.div`
  padding-block: 20px;
  width: 80%;
  margin-inline: auto;
  display: flex;
  gap: 20px;
`;

export const PageContent = styled(Link)`
  color: #333132;
  font-weight: 400;
  text-decoration: none;
`;
export const PageTittle = styled.div`
  font-size: 14px;
  text-transform: none;
  color: #222;
  font-weight: 700;
  letter-spacing: 0;
`;

export const ProductMain = styled.div`
  width: 80%;
  margin-inline: auto;
  padding-block: 80px;
  display: flex;
  gap: 30px;
`;
