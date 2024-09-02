import { AboutUsBox, AboutUsContent, AboutUsContentBox, AboutUsStyles, AboutUsTitle } from './styled';

export const AboutUsComponent: React.FC = () => {
  return (
    <AboutUsStyles>
      <AboutUsBox>
        <AboutUsTitle>About us</AboutUsTitle>
        <AboutUsContentBox>
          <AboutUsContent>
            SAGI is the Simons Astrophysics Group at the International Center for Interdisciplinary Science and
            Education (ICISE) in Quy Nhon, Việt Nam. SAGI aims to provide opportunities for overseas Vietnamese
            astronomers to collaborate with astronomers inside of Vietnam, and to teach astronomical techniques and
            instrumentation to students from Vietnam and the Southeast Asia region. Our goal is to establish an
            environment for aspiring Viet astronomers from overseas to come back home and make concrete, meaningful, and
            hopefully lasting contributions to the long-term development of astronomy and astrophysics in Vietnam.
          </AboutUsContent>
          <AboutUsContent>
            SAGI is founded by the four astrophysicists Nguyễn Trọng Hiền, Hoàng Chí Thiêm, Nguyễn Đức Diệu, Nguyễn
            Lương Quang. SAGI program will plant the seeds for robust collaborative research, both in theoretical and
            observational astrophysics, in Vietnam. We welcome scientists from all over the world to visit and
            collaborate with us. We will train graduate students who are proficient in mathematics, physics, and
            computer programming, and introduce them to the current research in astrophysics. We expect these activities
            will prepare us for more ambitious collaborative scientific projects, such as sounding rocket experiments to
            explore the ultraviolet and the infrared sky.
          </AboutUsContent>
        </AboutUsContentBox>
      </AboutUsBox>
    </AboutUsStyles>
  );
};
