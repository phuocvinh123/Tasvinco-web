import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ProductGalleryImgTopBox,
  ProductGalleryImgBottom,
  ProductGalleryImgBottomBox,
  ProductGalleryImgTop,
  ProductGalleryBox,
} from './styled';
import { ProductGalleryData } from './constant';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
};

const setting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
};

export const ProductGalleryComponent: React.FC = () => {
  return (
    <ProductGalleryBox>
      <ProductGalleryImgTopBox>
        <Slider {...settings}>
          {ProductGalleryData.length &&
            ProductGalleryData.map((data) => <ProductGalleryImgTop key={data.id} src={data.images} />)}
        </Slider>
      </ProductGalleryImgTopBox>
      <ProductGalleryImgBottomBox>
        <Slider {...setting}>
          {ProductGalleryData.length &&
            ProductGalleryData.map((data) => <ProductGalleryImgBottom key={data.id} src={data.images} />)}
        </Slider>
      </ProductGalleryImgBottomBox>
    </ProductGalleryBox>
  );
};
