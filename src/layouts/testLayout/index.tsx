import { AboutUsComponent } from './feature/aboutUS';
import { BannerComponent } from './feature/banner';
import { FooterComponent } from './feature/footer';
import { HeaderComponent } from './feature/header';
import { LastestNewComponent } from './feature/lastestNew';
import { OurTeamComponent } from './feature/ourTeam';
import { PartnerComponent } from './feature/partner';
import { TechnologyComponent } from './feature/technology';
import { TestimonialsComponent } from './feature/testimonials';
import { TestStyles } from './styled';

export const TestLAyout: React.FC = () => {
  return (
    <TestStyles>
      <HeaderComponent />
      <BannerComponent />
      <AboutUsComponent />
      <TechnologyComponent />
      <PartnerComponent />
      <OurTeamComponent />
      <TestimonialsComponent />
      <LastestNewComponent />
      <FooterComponent />
    </TestStyles>
  );
};
