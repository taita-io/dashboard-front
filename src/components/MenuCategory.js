import React from 'react';
import MenuItem from './MenuItem';

const MenuCategory = ({ label, items }) => {
  return (
    <div>
      <h3>{label}</h3>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

export default MenuCategory;
