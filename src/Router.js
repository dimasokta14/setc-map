import React, {useEffect, lazy, Suspense, Fragment} from 'react'
import {Redirect, Route, BrowserRouter, Switch} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import {history} from './helpers'
import { alertActions } from './actions/alertActions';
import Welcome from './components/WelcomeScreen'
import {connect} from 'react-redux';
import App from './App'

const MapComponent = lazy(() => import('./App'))

const Router = (props) => {
  useEffect(() => {
    console.log(props.pins)
    const {dispatch} = props
    history.listen((location, action) => {
      dispatch(alertActions.clear())
    })
  },[])
  return(
    <BrowserRouter>
      <Suspense fallback={<Fragment/>}>
        <Switch>
          <Route path='/map' render={() => <App/>}/>
          <Route exact path='/' render={() => <Welcome/>}/>
          <Route path='/login' render={() => <Login/>}/>
          <Route path='/register' render={() => <Register/>}/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

function PrivateRoute({component, ...rest}){
  return (
    <Route
      {...rest}
      render={props =>
        props.users.loggedIn ? (
          <MapComponent/>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  )
}

function mapStateToProps(state){
  const {alert} = state
  return{
    alert,
    users: state.users,
    pins: state.pins
  }
}

export default connect(mapStateToProps)(Router)
