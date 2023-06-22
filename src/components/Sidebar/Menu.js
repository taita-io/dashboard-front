import React from 'react';
import { Link } from 'react-router-dom'; // import Link from react-router-dom
import styles from './Menu.module.css';

const MenuItem = ({ icon, label, link }) => {
  return (
    <Link to={link} className={styles['menu-item']}>
      <div className={styles['menu-item-icon']}>
        {icon}
      </div>
      <span className={styles['menu-item-label']}>
        {label}
      </span>
    </Link>
  );
};

const MenuCategory = ({ label, items }) => {
  return (
    <div className={styles['menu-category-title']}>
      <h3>{label}</h3>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

const Menu = ({ categories }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <MenuCategory key={index} {...category} />
      ))}
    </div>
  );
};

export default Menu;
