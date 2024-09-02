import { HeaderBox, HeaderLeft, HeaderLeftBox, HeaderRight, HeaderRightBox, HeaderStyles } from './styled';

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderStyles>
      <HeaderBox>
        <HeaderLeftBox>
          <HeaderLeft>BOLTpZ.AI</HeaderLeft>
        </HeaderLeftBox>
        <HeaderRightBox>
          <HeaderRight>About Us</HeaderRight>
          <HeaderRight>Technology</HeaderRight>
          <HeaderRight>Partners</HeaderRight>
          <HeaderRight>Our Team</HeaderRight>
          <HeaderRight>Blog</HeaderRight>
          <div
            style={{
              borderRadius: '40px',
              backgroundColor: 'white',
              color: 'black',
              textAlign: 'center',
              padding: '10px',
            }}
          >
            Contact Us
          </div>
        </HeaderRightBox>
      </HeaderBox>
    </HeaderStyles>
  );
};
