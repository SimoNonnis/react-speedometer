import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SpeedoMeter from './SpeedoMeter';

import styles from './app.css';


class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <ReactCSSTransitionGroup
          component='div'
          transitionName="box"
          transitionAppear={true}
          transitionAppearTimeout={400}
          transitionEnterTimeout={400}
          transitionLeave={false}
        >
          <SpeedoMeter />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}



export default App;
