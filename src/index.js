import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {store} from './helpers';
import {Provider} from 'react-redux';
import Router from './Router'
import App from './App'
// import FirebaseProvider from './firebase'

ReactDOM.render(
    <Provider store={store}>
      {/* <FirebaseProvider>
        <Router/>
      </FirebaseProvider> */}
      <Router/>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
