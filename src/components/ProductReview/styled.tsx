import { styled } from 'styled-components';

export const ReviewContainer = styled.div`
  margin-top: 20px;
  color: #333;
`;

export const ReviewItem = styled.div`
  margin-bottom: 10px;
`;

export const Star = styled.span`
  color: yellow;
  font-size: 28px;
  margin-right: 5px;
`;

export const EmptyStar = styled(Star)`
  color: gray;
`;
