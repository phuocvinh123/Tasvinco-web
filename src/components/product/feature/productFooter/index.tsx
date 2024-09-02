import React, { useState } from 'react';
import { ProductTagsData } from './constant';
import { Describeomponent } from './feature/describe';
import { ProductFooterBox, ProductTags, ProductTagsContent, ProductTagsContentBox } from './stled';
import { SpecificationsComponent } from './feature/specifications';

export const ProductFooterComponent: React.FC = () => {
  const [selectedId, setSelectedId] = useState(1);

  const handleClick = (id: number) => {
    setSelectedId(id);
  };

  const renderContent = () => {
    switch (selectedId) {
      case 1:
        return <Describeomponent />;
      case 2:
        return <SpecificationsComponent />;
      case 3:
        return <Describeomponent />;

      default:
        return <Describeomponent />;
    }
  };

  return (
    <ProductFooterBox>
      <ProductTags>
        {ProductTagsData.length &&
          ProductTagsData.map((data) => (
            <ProductTagsContentBox
              key={data.id}
              onClick={() => handleClick(data.id)}
              isSelected={selectedId === data.id}
            >
              <ProductTagsContent>{data.content}</ProductTagsContent>
            </ProductTagsContentBox>
          ))}
      </ProductTags>
      {renderContent()}
    </ProductFooterBox>
  );
};
