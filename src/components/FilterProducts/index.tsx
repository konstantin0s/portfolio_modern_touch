import React from 'react';

export const FilterProducts = ({ onFilterChange }: any) => {
  return (
    <div>
      <input type='text' placeholder='Search...' onChange={onFilterChange} />
      <select onChange={onFilterChange}>
        <option value=''>All</option>
        <option value='category1'>Category 1</option>
        <option value='category2'>Category 2</option>
      </select>
    </div>
  );
};
