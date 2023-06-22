import React, { useState } from 'react';
import styles from "./Logo.module.css";

function Logo({ full }) {
  return (
    <a className={full ? styles.logoFull : styles.logoSmall} />
  )
}

export default Logo



