import styled from 'styled-components';

export const ProductGalleryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: auto;
`;

export const ProductGalleryImgTopBox = styled.div`
  width: 20%;
  height: 250px;
  cursor: pointer;
  overflow: hidden;
`;

export const ProductGalleryImgTop = styled.img`
  object-fit: cover;
`;

export const ProductGalleryImgBottomBox = styled.div`
  width: 20%;
  cursor: pointer;
  overflow: hidden;
`;

export const ProductGalleryImgBottom = styled.img`
  height: 60px;
`;
