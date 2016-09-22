import React, { PropTypes } from 'react';
import { getSymbolFromCurrency } from 'currency-symbol-map';

import styles from './speedo-meter.css';

const SpeedoMeter = (props) => {
  const { value, max, unit } = props.payload;
  const currencySymbol = getSymbolFromCurrency(unit);

  return (
    <div className={styles.box}>
      <h1 className={styles.bigValue}>
        <span className={styles.bigValueSymbol}>
          {currencySymbol}</span>{value}
      </h1>
      <div className={styles.meterContainer}>
        <div className={styles.meter}></div>
      </div>
      <div className={styles.containerMinMax}>
        <h2>
          <span className={styles.valueSymbol}>
            {currencySymbol}</span>0
        </h2>
        <h2>
          <span className={styles.valueSymbol}>
            {currencySymbol}</span>{max}
        </h2>
      </div>
    </div>
  )
}

SpeedoMeter.propTypes = {
  payload: PropTypes.object.isRequired
}

export default SpeedoMeter;
