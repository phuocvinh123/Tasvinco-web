import {
  FooterBox,
  FooterContainer,
  FooterLeftContent,
  FooterLeft,
  FooterStyles,
  FooterLeftTitles,
  TechItemButtonBox,
  TechItemButton,
  TechItemIcon,
  FooterRights,
  FooterRightTitle,
  FooterRightContentBox,
  FooterRightContent,
  FooterRightIconBox,
  IconFacebook,
  IconTwitter,
  IconInsta,
} from './styled';

export const FooterComponent: React.FC = () => {
  return (
    <FooterContainer>
      <FooterStyles>
        <FooterBox>
          <FooterLeft>
            <FooterLeftTitles>BOLTpZ.AI</FooterLeftTitles>
            <FooterLeftContent>
              Starting a new project or
              <br /> want to collaborate with us?
            </FooterLeftContent>
            <TechItemButtonBox>
              <TechItemButton>Learn more</TechItemButton>
              <TechItemIcon />
            </TechItemButtonBox>
          </FooterLeft>
          <FooterRights>
            <FooterRightTitle>GET IN TOUCH</FooterRightTitle>
            <FooterRightContentBox>
              <FooterRightContent>q.nguyen@boltz.ai</FooterRightContent>
              <FooterRightContent>(408) 855-8765</FooterRightContent>
            </FooterRightContentBox>
            <FooterRightContent style={{ marginTop: '20px' }}>
              #150 - 100 College St. Toronto, Ontario M5G 1L5, Canada
            </FooterRightContent>
            <FooterRightIconBox>
              <IconFacebook />
              <IconTwitter />
              <IconInsta />
            </FooterRightIconBox>
          </FooterRights>
        </FooterBox>
        <FooterRightContent style={{ color: '#757575' }}>© 2021 BOLTZ. All rights reserved.</FooterRightContent>
      </FooterStyles>
    </FooterContainer>
  );
};
