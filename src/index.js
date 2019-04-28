import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactBreakpoints from 'react-breakpoints'
const breakpoints = {
    mobile: 425,
    tablet: 768,
    desktop: 769
  }

ReactDOM.render( 
<ReactBreakpoints breakpoints={breakpoints}>
    <App />
</ReactBreakpoints>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
