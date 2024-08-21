/* eslint-disable react/no-array-index-key */
import React, { useState, useRef } from 'react';
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const handleImageClick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
  };

  return (
    <ProductGalleryBox>
      <ProductGalleryImgTopBox>
        <Slider
          ref={sliderRef}
          {...settings}
          initialSlide={currentSlide}
          afterChange={(current) => setCurrentSlide(current)}
        >
          {ProductGalleryData.map((data, index) => (
            <ProductGalleryImgTop key={index} src={data.images} />
          ))}
        </Slider>
      </ProductGalleryImgTopBox>
      <ProductGalleryImgBottomBox>
        <Slider {...setting}>
          {ProductGalleryData.map((data, index) => (
            <ProductGalleryImgBottom key={index} src={data.images} onClick={() => handleImageClick(index)} />
          ))}
        </Slider>
      </ProductGalleryImgBottomBox>
    </ProductGalleryBox>
  );
};
