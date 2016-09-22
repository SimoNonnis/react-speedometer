import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SpeedoMeter from './SpeedoMeter';

import styles from './app.css';


class App extends Component {
  constructor () {
    super();
    this.state = {
      payload: {}
    }
  }

  componentDidMount() {
    const endPoint = 'https://widgister.herokuapp.com/challenge/frontend';

    fetch(endPoint)
      .then(data => data.json())
      .then(data => this.setState({ payload: data }))
  }

  render() {
    const { payload } = this.state;

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
          <SpeedoMeter payload={payload} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}



export default App;
