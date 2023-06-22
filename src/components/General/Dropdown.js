import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import Select, { components } from 'react-select';



/*
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
  
*/

/*
function Dropdown({ options, iconUrl, color }) {
    return (
      <div className={styles.dropdownContainer}>
        {iconUrl && <img className={styles.vectorIcon} alt="" src={iconUrl} />}
        <select className={styles.jobSelection}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }*/

  function Dropdown({ options, iconUrl, color }) {
    // Convert options to the format expected by react-select
    const selectOptions = options.map(option => ({ value: option, label: option }));
  
    // Custom Control component to include the icon
    const Control = ({ children, ...props }) => (
      <div className={styles.dropdownControl}>
        {iconUrl && <img className={styles.vectorIcon} alt="" src={iconUrl} />}
        <components.Control {...props}>
          {children}
        </components.Control>
      </div>
    );
  
    return (
      <Select 
        className={styles.jobSelection}
        options={selectOptions}
        isClearable
        isSearchable
        components={{ Control }}
        styles={{
          control: (provided) => ({
            ...provided,
            height: 52,
            width: 233,
            borderColor: 'var(--color-lightgray)',
            boxShadow: 'none',
            '&:hover': {
              borderColor: 'var(--color-lightgray)',
            },
          }),
          option: (provided) => ({
            ...provided,
            padding: '20px',
          }),
        }}
      />
    );
  }
  
  export default Dropdown;
