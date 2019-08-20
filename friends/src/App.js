import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom'
import './App.css';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) =>
  {
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
