import React from 'react';
import styles from './Header.module.css';
import Button from './Question_in_Selection';

const Header = ({ boxData }) => {
  return (
    <div className={styles.stickyTop}>
      <h1  className={styles.pageTitle}>compare candidates using ai</h1>
      <div className={styles.questionSelectionWrapper}>
        {boxData.map((box, index) => (
          <Button title={box.title} status={box.status} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Header;
