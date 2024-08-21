import { useState } from 'react';
import {
  ButtonShow,
  DescribeContentLi,
  DescribeContentUl,
  Describeontent,
  DescribeStyles,
  DescribeTitle,
} from './styled';

export const Describeomponent: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <DescribeStyles>
      <DescribeTitle>Cấu tạo máy bên ngoài </DescribeTitle>
      <Describeontent>Mặt trước:</Describeontent>
      <DescribeContentUl>
        <DescribeContentLi>Màn hình hiển thị dòng hàn</DescribeContentLi>
        <DescribeContentLi>Núm điều chỉnh dòng hàn</DescribeContentLi>
        <DescribeContentLi>Phím lựa chọn chế độ: Synergic; Thông số cài đặt dòng hàn</DescribeContentLi>
        <DescribeContentLi>Logo Jasic</DescribeContentLi>
        <DescribeContentLi>Cực dương và cự âm để kết nối kìm hàn và kẹp mát</DescribeContentLi>
      </DescribeContentUl>

      {show && (
        <>
          <Describeontent>Mặt sau:</Describeontent>
          <DescribeContentUl>
            <DescribeContentLi>Công tắc nguồn</DescribeContentLi>
            <DescribeContentLi>Quạt làm mát</DescribeContentLi>
            <DescribeContentLi>Hộp chức năng</DescribeContentLi>
          </DescribeContentUl>

          <Describeontent>Phụ kiên nguyên bản theo nhà cung cấp</Describeontent>
          <DescribeContentUl>
            <DescribeContentLi>2 đầu nối nhánh</DescribeContentLi>
          </DescribeContentUl>

          <Describeontent>Vật liệu tiêu hao</Describeontent>
          <DescribeContentUl>
            <DescribeContentLi>Que hàn</DescribeContentLi>
          </DescribeContentUl>

          <DescribeTitle>Tính năng nổi bật</DescribeTitle>
          <DescribeContentUl>
            <DescribeContentLi>
              Hệ thống điều khiển kỹ thuật số. Màn hình LCD hiển thị thông số dòng hàn
            </DescribeContentLi>
            <DescribeContentLi>
              Có 2 chế độ hàn que: hàn thường và Synergic, tự động điều chỉnh dòng hàn thông minh
            </DescribeContentLi>
            <DescribeContentLi>
              OCV cao, dòng hàn khỏe, dòng hàn tối đa lên tới 400A. Máy có khả năng hàn que 5.0 mm liên tục
            </DescribeContentLi>
            <DescribeContentLi>Mồi hồ quang ổn định, hàn êm, ít bắn tóe, mối hàn có độ ngấu cao</DescribeContentLi>
            <DescribeContentLi>
              Sử dụng quạt làm mát thông minh (on demand fan), chỉ hoạt động khi cần làm mát, giúp tiết kiệm điện, giảm
              tiếng ồn, giảm bụi.
            </DescribeContentLi>
          </DescribeContentUl>

          <DescribeTitle>Ứng dụng</DescribeTitle>
          <DescribeContentUl>
            <DescribeContentLi>Bồn bể áp lực, dân dụng, dầu khí, đóng tàu, kết cấu thép</DescribeContentLi>
          </DescribeContentUl>
        </>
      )}

      <ButtonShow onClick={handleClick}>{show ? 'THU GỌN' : 'XEM THÊM'}</ButtonShow>
    </DescribeStyles>
  );
};
