import React, { useState } from 'react';
import styles from './Question_in_Selection.module.css';

const Button = ({ title }) => {
  const [isSelected, setIsSelected] = useState(true);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      className={`${styles.conflictResolutionContainer} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
    >
      <div className={`${styles.conflictResolutionWrapper1} ${isSelected ? styles.selected : ''}`}>
        <div className={styles.conflictResolution}>{title}</div>
      </div>
    </button>
  );
};

export default Button;
