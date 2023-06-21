import React from 'react';
import styles from './Questions_Selection.module.css';
import Button from './Question_in_Selection';

const Questions_Selection = ({ boxData }) => {
  return (
    <div className={styles.FrameParent2}>
      {boxData.map((box, index) => (
        <Button title={box.title} status={box.status} key={index} />
      ))}
    </div>
  );
};

export default Questions_Selection;
