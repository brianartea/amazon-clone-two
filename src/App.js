import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import Payment from './Payment'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders'

const promise = loadStripe('pk_test_51HeB8pIuqHuGWmz9wBmbBCWhveu7OBsbORNEbHHwfGPi1ydgG3opFtbHUdzafa69fs2hyoZweyWGJoyeNUbHCpjD00SiBGGX28');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        // user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
