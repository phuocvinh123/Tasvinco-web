import { ProductTagsData } from './constant';
import { Describeomponent } from './feature/describe';
import { ProductFooterBox, ProductTags, ProductTagsContent, ProductTagsContentBox } from './stled';

export const ProdcutFooterComponent: React.FC = () => {
  return (
    <ProductFooterBox>
      <ProductTags>
        {ProductTagsData.length &&
          ProductTagsData.map((data) => (
            <ProductTagsContentBox key={data.id}>
              <ProductTagsContent>{data.content}</ProductTagsContent>
            </ProductTagsContentBox>
          ))}
      </ProductTags>
      <Describeomponent />
    </ProductFooterBox>
  );
};
