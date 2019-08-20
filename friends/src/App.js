import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'
import Protected from './components/Protected'
import './App.css';

function App() {

  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <PrivateRoute path="/protected" component={Protected} />
    </div>
  );
}

export default App;
