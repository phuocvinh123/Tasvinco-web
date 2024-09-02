import { OurTeamData } from './constant';
import {
  OurTeam,
  OurTeamBox,
  OurTeamBoxContent,
  OurTeamBoxTitle,
  OurTeamImg,
  OurTeamStyles,
  OurTeamTitle,
} from './styled';

export const OurTeamComponent: React.FC = () => {
  return (
    <OurTeamStyles>
      <OurTeamTitle>Our team</OurTeamTitle>
      <OurTeam>
        {OurTeamData.length &&
          OurTeamData.map((data) => (
            <OurTeamBox key={data.id}>
              <OurTeamImg src={data.img} />
              <OurTeamBoxTitle>{data.title}</OurTeamBoxTitle>
              <OurTeamBoxContent>{data.content}</OurTeamBoxContent>
            </OurTeamBox>
          ))}
      </OurTeam>
    </OurTeamStyles>
  );
};
