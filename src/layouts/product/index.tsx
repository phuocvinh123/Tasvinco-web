import { FooterPage, HeaderPage } from 'components';
import { ProductComponent } from 'components/product';

export const ProductLayout: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <ProductComponent />
      <FooterPage />
    </>
  );
};
