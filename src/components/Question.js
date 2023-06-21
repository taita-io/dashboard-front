import React, { useState } from 'react';
import styles from "../pages/Dashboard1.module.css"; //change it to local styles!!

function Question({ summaryText, fullText, isOpen }) {
    return (
    <div>
      {isOpen ? (
        <div>
          {fullText}
        </div>
      ) : (
        <div>
          <div className={styles.aiIcon1Parent}>
            <img
              className={styles.aiIcon1}
              alt=""
              src="/ai-icon-1@2x.png"
            />
            <b className={styles.conflictResolution}>
              {summaryText}
            </b>
          </div>
        </div>
      )}
    </div>);
  }

export default Question