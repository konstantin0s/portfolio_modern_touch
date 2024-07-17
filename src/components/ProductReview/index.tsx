import React from 'react';
import { Star, EmptyStar, ReviewContainer, ReviewItem } from './styled';

const renderStarRating = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i}>&#9733;</Star>); // Full star
    } else {
      stars.push(<EmptyStar key={i}>&#9734;</EmptyStar>); // Empty star
    }
  }
  return stars;
};

export const ProductReviews = ({ reviews }: any) => {
  return (
    <ReviewContainer>
      <h3>Reviews</h3>
      <ReviewItem key={reviews.id}>
        <p>Count: {reviews.count}</p>
        <p>Rating: {renderStarRating(reviews.rate)}</p>
      </ReviewItem>
    </ReviewContainer>
  );
};
