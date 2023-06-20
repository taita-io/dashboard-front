import React, { useState } from 'react';
import styles from './Dropdown.module.css';

function Dropdown({ options, iconUrl, color }) {
    return (
        <select className={styles.jobSelection}>
        {iconUrl && <img className={styles.vectorIcon} alt="" src={iconUrl} />}
            {options.map((option, index) => (
                <option key={index} value={option}>
                {option}
                </option>
            ))}
        </select>
    );
  }
  

  

export default Dropdown;
