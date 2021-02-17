import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route, Router} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import {store, history} from './helpers';
import {Provider, connect} from 'react-redux';
import { alertActions } from './actions/alertActions';


const IndexApp = (props) => {
  useEffect(() => {
    const {dispatch} = props
    history.listen((location, action) => {
      dispatch(alertActions.clear())
    })
  },[])
  return(
    <Router history={history}>
        <Route
          exact
          path='/'
          render={() => <App />}
        />
        <Route
          exact
          path='/register'
          render={() => <Register/>}
        />
        <Route
          exact
          path='/login'
          render={() => <Login/>}
        />
    </Router>
  )
}

function mapStateToProps(state){
  const {alert} = state
  return{
    alert
  }
}

const connectedApp = connect(mapStateToProps)(IndexApp)
export {connectedApp as IndexApp}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <IndexApp/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
