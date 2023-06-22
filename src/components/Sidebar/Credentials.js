import React, { useState } from 'react';
import styles from "./Credentials.module.css"; 

function Credentials () {
    return (
        <div className={styles.menuBottomLogin}>
        <div className={styles.avatarParent}>
        <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
        <div className={styles.nameEmail}>
            <div className={styles.conflictResolution}>
            Ivanna Kreshchenetska
            </div>
            <div className={styles.ivannakreschenetskagmailcom}>
            ivanna.kreschenetska@gmail.com
            </div>
        </div>
        </div>
        <button className={styles.dotMenu} id="settings_button">
        <div className={styles.dotMenuChild} />
        <div className={styles.dotMenuChild} />
        <div className={styles.dotMenuChild} />
        </button>
    </div>
        )
  }

export default Credentials






