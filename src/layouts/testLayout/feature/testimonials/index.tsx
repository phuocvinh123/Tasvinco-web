import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  SliderBottom,
  SliderBox,
  SliderStyled,
  SliderTop,
  SliderTopContent,
  SliderTopContentBox,
  SliderTopImages,
  SliderTopTitles,
  TestimonialsBox,
  TestimonialsStyles,
  TestimonialsTitles,
} from './styled';
import { TestimonialsData } from './constant';
import { CustomNextArrow, CustomPrevArrow } from './arrow';

export const TestimonialsComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <TestimonialsStyles>
      <TestimonialsBox>
        <TestimonialsTitles>
          Explore how <br />
          customers thinking
          <br /> about BOLTZ
        </TestimonialsTitles>
        <SliderStyled>
          <Slider {...settings}>
            {TestimonialsData.length > 0 &&
              TestimonialsData.map((data) => {
                return (
                  <SliderBox key={data.id}>
                    <SliderTop>
                      <SliderTopImages src={data.image} />
                      <SliderTopContentBox>
                        <SliderTopTitles>{data.title}</SliderTopTitles>
                        <SliderTopContent>{data.content}</SliderTopContent>
                      </SliderTopContentBox>
                    </SliderTop>
                    <SliderBottom>{data.bottomContent}</SliderBottom>
                  </SliderBox>
                );
              })}
          </Slider>
        </SliderStyled>
      </TestimonialsBox>
    </TestimonialsStyles>
  );
};
