import { Link } from 'react-router-dom';
import {
  ButtonBox,
  ButtonContent,
  ButtonContentPhone,
  IconPhone,
  ProductInfoBox,
  ProductInfoContent,
  ProductInfoContentBox,
  ProductInfoContentTitle,
  ProductInfoPrice,
  ProductInfoSortDesc,
  ProductInfoSortDescContent,
  ProductInfoTitle,
  ProductRatingBox,
  ProductRatingReview,
} from './styled';

export const ProductInfoComponent: React.FC = () => {
  return (
    <ProductInfoBox>
      <ProductInfoTitle>MÁY HÀN QUE ARC400 Z298 Ⅱ (JET 20)</ProductInfoTitle>
      <ProductRatingBox>
        <ProductRatingReview>(0 khách hàng đánh giá)</ProductRatingReview>
        <div style={{ height: '0.1px' }}>|</div>
        <ProductRatingReview>
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
          Viết đánh giá sản phẩm
        </ProductRatingReview>
        <div style={{}}>|</div>
        <ProductRatingReview>In trang này</ProductRatingReview>
      </ProductRatingBox>
      <ProductInfoPrice>9.000.000 đ</ProductInfoPrice>
      <ProductInfoContentBox>
        <ProductInfoContentTitle>Thương hiệu:</ProductInfoContentTitle>
        <ProductInfoContent>Jasic</ProductInfoContent>
      </ProductInfoContentBox>
      <ProductInfoContentBox>
        <ProductInfoContentTitle>Mã sản phẩm:</ProductInfoContentTitle>
        <ProductInfoContent>Phụ kiện nguyên bản theo nhà cung cấp :2 đầu nối nhanh</ProductInfoContent>
      </ProductInfoContentBox>
      <ProductInfoContentBox>
        <ProductInfoContentTitle>Tên sản phẩm:</ProductInfoContentTitle>
        <ProductInfoSortDesc>
          <ProductInfoContent style={{ color: '#ff6900', fontWeight: '600' }}>
            Giá đã bao gồm VAT
            <br /> Bảo hành 18 bằng tem bảo hành điện tử
          </ProductInfoContent>
          <ProductInfoSortDescContent>
            Hệ thống điều khiển kỹ thuật số. Màn hình LCD hiển thị thông số dòng hàn
          </ProductInfoSortDescContent>
          <ProductInfoSortDescContent>
            Có 2 chế độ hàn que: hàn thường và Synergic, tự động điều chỉnh dòng hàn thông min
          </ProductInfoSortDescContent>
          <ProductInfoSortDescContent>
            OCV cao, dòng hàn khỏe, dòng hàn tối đa lên tới 400A.Máy có khả năng hàn que 5.0 mm liên tục.
          </ProductInfoSortDescContent>
          <ProductInfoSortDescContent>
            Mồi hồ quang ổn định, hàn êm,ít bắn tóe, mối hàn có độ ngấu cao
          </ProductInfoSortDescContent>
          <ProductInfoSortDescContent>
            Sử dụng quạt làm mát thông minh (on deman fan), chỉ hoạt động khi cần làm mát, giúp tiết kiệm điện, giảm
            tiếng ồn, giảm bụi
          </ProductInfoSortDescContent>
        </ProductInfoSortDesc>
      </ProductInfoContentBox>
      <ButtonBox>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <ButtonContent>Báo giá ngay</ButtonContent>
        </Link>
        <ButtonContentPhone>
          <IconPhone />
          19001111
        </ButtonContentPhone>
      </ButtonBox>
    </ProductInfoBox>
  );
};
