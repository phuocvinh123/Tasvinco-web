import { SpecificationsData } from './constant';
import {
  SpecificationStyles,
  TabsPanelstyles,
  TabsPanelTd,
  TabsPanelTdLeft,
  TabsPanelTdRight,
  TabsPanelTr,
} from './styled';

export const SpecificationsComponent: React.FC = () => {
  return (
    <SpecificationStyles>
      <TabsPanelstyles>
        <TabsPanelTr>
          <TabsPanelTd style={{ fontWeight: 'bolder', textAlign: 'center' }}>Model</TabsPanelTd>
          <TabsPanelTd style={{ fontWeight: 'bolder', textAlign: 'center' }}>
            LS-20000F tích hợp đầu cấp 2 dây
          </TabsPanelTd>
        </TabsPanelTr>
        {SpecificationsData.length &&
          SpecificationsData.map((data) => (
            <TabsPanelTr key={data.id}>
              <TabsPanelTdLeft>{data.contentLeft}</TabsPanelTdLeft>
              <TabsPanelTdRight>{data.constentRight}</TabsPanelTdRight>
            </TabsPanelTr>
          ))}
      </TabsPanelstyles>
    </SpecificationStyles>
  );
};
