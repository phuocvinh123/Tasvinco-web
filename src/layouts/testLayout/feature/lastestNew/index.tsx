import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  LastestNewBox,
  LastestNewSliderBox,
  LastestNewStyles,
  NewBox,
  NewBoxImages,
  NewTitle,
  TechItemButton,
  TechItemButtonBox,
  TechItemIcon,
  Title,
} from './styled';

import { LastestNewData } from './constant';
import { CustomNextArrow, CustomPrevArrow } from './arrow';

export const LastestNewComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <LastestNewStyles>
      <LastestNewBox>
        <Title>lastest news</Title>
        <LastestNewSliderBox>
          <Slider {...settings}>
            {LastestNewData.length > 0 &&
              LastestNewData.map((data) => {
                return (
                  <NewBox key={data.id}>
                    <NewBoxImages src={data.image} />
                    <NewTitle>{data.title}</NewTitle>
                    <TechItemButtonBox>
                      <TechItemButton>Learn more</TechItemButton>
                      <TechItemIcon />
                    </TechItemButtonBox>
                  </NewBox>
                );
              })}
          </Slider>
        </LastestNewSliderBox>
      </LastestNewBox>
    </LastestNewStyles>
  );
};
