import React from 'react';
import styles from './speedo-meter.css';

const SpeedoMeter = () => {
  return (
    <div className={styles.box}>
      <h1 className={styles.bigValue}>
        <span className={styles.bigValueSymbol}>£</span>34
        <div className={styles.containerMinMax}>
          <h2><span className={styles.valueSymbol}>£</span>0</h2>
          <h2><span className={styles.valueSymbol}>£</span>200</h2>
        </div>
      </h1>
    </div>
  )
}

export default SpeedoMeter;
