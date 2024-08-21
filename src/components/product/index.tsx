import { ProdcutFooterComponent } from './feature/productFooter';
import { ProductGalleryComponent } from './feature/productGallery';
import { ProductInfoComponent } from './feature/productInfo';
import { PageContent, PageTitleBox, PageTittle, ProductMain, ProductPageTitleBox } from './styled';

export const ProductComponent: React.FC = () => {
  return (
    <>
      <PageTitleBox>
        <ProductPageTitleBox>
          <PageContent to="/">Trang chủ </PageContent>/<PageContent to="/danh-muc">Máy hàn Laser </PageContent>/
          <PageTittle>MÁY HÀN LASER LS-20000F JASIC tích hợp đầu cấp 2 dây </PageTittle>
        </ProductPageTitleBox>
      </PageTitleBox>
      <ProductMain>
        <ProductGalleryComponent />
        <ProductInfoComponent />
      </ProductMain>
      <ProdcutFooterComponent />
    </>
  );
};
