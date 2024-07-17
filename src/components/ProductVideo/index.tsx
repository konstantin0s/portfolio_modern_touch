import React from 'react';

export const ProductVideo = () => {
  return (
    <div>
      <h3>Product Video</h3>
      <video controls>
        <source src={''} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
