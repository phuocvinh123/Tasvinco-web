import React from 'react';
import { BackgroundContact, LogoWhite } from 'assets';
import {
  ButtonStyled,
  ContacrFormLeftBox,
  ContacrFormRightBox,
  ContactFormStyles,
  ContactInput,
  ContactStyles,
  ContactTitleStyles,
  Content,
  ContentBoxStyles,
  IconAddress,
  IconEmail,
  IconPhoneCall,
  IconPhoneCalls,
  ImagesContainer,
  ImagesStyles,
  LogoStyles,
  PhoneCallBox,
  TextareaStyled,
  TitleLeft,
  TitleStyles,
} from './styled';

export const ContactComponent: React.FC = () => {
  return (
    <>
      <ImagesContainer>
        <ImagesStyles src={BackgroundContact} />
        <TitleStyles>
          Liên hệ với chúng tôi
          <br /> để được tư vấn miễn phí
        </TitleStyles>
      </ImagesContainer>
      <ContactStyles>
        <ContactTitleStyles>Liên hệ với chúng tôi</ContactTitleStyles>
        <ContactFormStyles>
          <ContacrFormLeftBox>
            <LogoStyles src={LogoWhite} />
            <TitleLeft>Công ty cổ phần doanh nghiệp Vinacom</TitleLeft>
            <ContentBoxStyles>
              <IconAddress />
              <Content>224 Đinh Đức Thiện, Hòa MInh, Liên Chiểu, Đà Nẵng</Content>
            </ContentBoxStyles>
            <ContentBoxStyles>
              <IconPhoneCall />
              <Content>0219.4396.170 - 0211.710.561</Content>
            </ContentBoxStyles>
            <ContentBoxStyles>
              <IconEmail />
              <Content>infor@gmail.com</Content>
            </ContentBoxStyles>
            <PhoneCallBox>
              <IconPhoneCalls />
              <Content> 0211.710.561</Content>
            </PhoneCallBox>
          </ContacrFormLeftBox>
          <ContacrFormRightBox>
            <ContactInput type="text" style={{ marginTop: '80px' }} placeholder="Họ và tên(*)" />
            <ContactInput type="email" placeholder="Địa chỉ email(*)" />
            <ContactInput type="tel" placeholder="Số điện thoại(*)" />
            <TextareaStyled id="message" name="message" placeholder="Tin nhắn" />
            <ButtonStyled>Gửi tin nhắn</ButtonStyled>
          </ContacrFormRightBox>
        </ContactFormStyles>
      </ContactStyles>
    </>
  );
};
