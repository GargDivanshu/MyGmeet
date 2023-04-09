import logo from './logo.svg';
import React, { Fragment } from "react";
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
// import Register from './pages/Register/Register';
// import Login from './pages/Login';
import Authenticate from './pages/authenticate/authenticate';
import Activate from './pages/activate/Activate';


const isAuth = true;


function App() {
  return (
    <BrowserRouter>
    <Navigation

    />
    <Switch>
 
    <GuestRoute path="/" exact>
                    <Home />
                </GuestRoute>
                <GuestRoute path="/authenticate">
                    <Authenticate />
                </GuestRoute>

      {/* <SemiProtectedRoute path="/activate">
        <Activate/>
      </SemiProtectedRoute> */}

    </Switch>

    </BrowserRouter>
  );
}

// Generate a custom route for guest users











const GuestRoute = ({ children, ...rest }) => {
  // const { isAuth } = useSelector((state) => state.auth);
  return (
      <Route
          {...rest}
          render={({ location }) => {
              return isAuth ? (
                  <Redirect
                      to={{
                          pathname: '/rooms',
                          state: { from: location },
                      }}
                  />
              ) : (
                  children
              );
          }}
      ></Route>
  );
};

export default App;
