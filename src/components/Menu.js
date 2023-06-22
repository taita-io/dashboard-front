import React from 'react';
import { Link } from 'react-router-dom'; // import Link from react-router-dom
import styles from './Sidebar.module.css';

const MenuItem = ({ icon, label, link }) => {
  return (
    <Link to={link} className={styles['sidebar__menu']}>
      <div className={styles['sidebar__menu-icon']}>
        {icon}
      </div>
      <span className={styles['sidebar__menu-label']}>
        {label}
      </span>
    </Link>
  );
};

const MenuCategory = ({ label, items }) => {
  return (
    <div className={styles['sidebar__dropdown']}>
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
