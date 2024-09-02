import {
  BottomBoder,
  CommentForm,
  ProductReviewBox,
  ProductReviewButton,
  ProductReviewStyles,
  ProductReviewTitles,
} from './styled';

export const ProductReviewComponent: React.FC = () => {
  return (
    <ProductReviewStyles>
      <ProductReviewBox>
        <ProductReviewTitles>MÁY HÀN LASER LS-20000F JASIC tích hợp đầu cấp 2 dây (Thế hệ thứ 3)</ProductReviewTitles>
        <ProductReviewButton>Đánh Giá Sản Phẩm</ProductReviewButton>
      </ProductReviewBox>
      <CommentForm>
        <div>aaa</div>
      </CommentForm>
      <BottomBoder />
      <BottomBoder />
    </ProductReviewStyles>
  );
};
