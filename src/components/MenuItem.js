import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ icon, label, link }) => {
  return (
    <Link to={link} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
      {icon}
      <span style={{ marginLeft: '10px' }}>{label}</span>
    </Link>
  );
};

export default MenuItem;
