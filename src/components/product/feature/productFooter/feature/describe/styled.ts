import styled from 'styled-components';

export const DescribeStyles = styled.div`
  padding-block: 20px;
  margin-inline: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DescribeTitle = styled.div`
  font-size: 26px;
  line-height: 24px;
  font-weight: 700;
  font-style: normal;
`;
export const Describeontent = styled.div`
  font-weight: 500;
`;

export const DescribeContentUl = styled.ul``;
export const DescribeContentLi = styled.li``;

export const ButtonShow = styled.div`
  width: 10%;
  margin-inline: auto;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d72e24;
  border: 1px solid #d72e24;
  cursor: pointer;
  &:hover {
    background-color: #d72e24;
    color: white;
  }
`;
