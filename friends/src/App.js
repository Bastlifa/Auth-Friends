import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import './App.css';

function App() {

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

export default App;
