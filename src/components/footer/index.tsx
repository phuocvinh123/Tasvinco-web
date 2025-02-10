import React from 'react';
import { Tooltip } from 'antd';
import { LogoWhite } from 'assets';
import {
  Footer,
  FooterWidgets,
  FooterColums,
  Logo,
  ContentTitle,
  Content,
  Icons,
  IconPhoneCall,
  IconEmail,
  IconAddress,
  IconFacebook,
  IconTwitter,
  IconInsta,
  IconWeb,
  IconYoutobe,
  WidgetTitle,
  Search,
  Input,
  IconEmailSearch,
  Button,
  SendEmail,
  FooterBorderBoottom,
  ContentFooterEnd,
} from './styled';

import { MenuFooterData, SupportFooterData } from './constant';
import { MenuFooter } from './feature/menu-footer';
import { SupportFooter } from './feature/support-footer';

export const FooterPage: React.FC = () => {
  return (
    <Footer>
      <FooterWidgets>
        <FooterColums>
          <Logo src={LogoWhite} alt="Logo" />
          <ContentTitle>Công Ty TNHH Cơ Khí Vinacom</ContentTitle>
          <Icons>
            <IconAddress />
            <Content>224 Đinh Đức Thiện, Hòa MInh, Liên Chiểu, Đà Nẵng</Content>
          </Icons>
          <Icons>
            <IconPhoneCall />
            <Content>0219.4396.170 - 0211.710.561</Content>
          </Icons>
          <Icons>
            <IconEmail />
            <Content>infor@gmail.com</Content>
          </Icons>
          <Icons>
            <IconWeb />
            <Content>vinacom.com</Content>
          </Icons>
          <Icons style={{ gap: '30px', marginTop: '30px' }}>
            <Tooltip title="FaceBook">
              <IconFacebook />
            </Tooltip>
            <Tooltip title="Twitter">
              <IconTwitter />
            </Tooltip>
            <Tooltip title="Instagram">
              <IconInsta />
            </Tooltip>
            <Tooltip title="Youtobe">
              <IconYoutobe />
            </Tooltip>
          </Icons>
        </FooterColums>
        <WidgetTitle>
          <ContentTitle>Menu</ContentTitle>
          {MenuFooterData.length && MenuFooterData.map((data) => <MenuFooter content={data.content} key={data.id} />)}
        </WidgetTitle>
        <WidgetTitle>
          <ContentTitle>SUPPORT</ContentTitle>
          {SupportFooterData.length &&
            SupportFooterData.map((data) => <SupportFooter content={data.content} key={data.id} />)}
        </WidgetTitle>
        <WidgetTitle>
          <ContentTitle>FOLLOW US</ContentTitle>
          <Content style={{ width: '180px' }}>
            Enter your email and well send you more information about new promotions, and the latest new products.
          </Content>
          <Search>
            <IconEmailSearch />
            <Input placeholder="Enter you email" />
            <Button>
              <SendEmail />
            </Button>
          </Search>
        </WidgetTitle>
      </FooterWidgets>
      <FooterBorderBoottom>
        <ContentFooterEnd>© 2023 Công ty TNHH Cơ khí Vinacom</ContentFooterEnd>
      </FooterBorderBoottom>
    </Footer>
  );
};
