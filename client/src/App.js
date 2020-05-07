import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Navbar from "./components/layout/navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";
import About from "./components/layout/About";
import MapState from "./map/mapstate";
import Weather from "./weather/weather";
import PrivateRouting from "./components/routing/PrivateRouting";
// import weather2 from "./weather/weather2";
import property from "./properties/property";
import ContactUs from "./components/layout/ContactUs";
const App = () => {
  return (
    <div className="App">
      <AlertState>
        <AuthState>
          <Router>
            <Fragment>
              <Navbar></Navbar>
              <div className="container">
                <Switch>
                  <Route exact path="/" component={Landing}></Route>
                  <Route exact path="/login" component={Login}></Route>
                  <Route exact path="/register" component={Register}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <PrivateRouting
                    exact
                    path="/map"
                    component={MapState}
                  ></PrivateRouting>
                  <PrivateRouting
                    exact
                    path="/weather"
                    component={Weather}
                  ></PrivateRouting>
                  <Route exact path="/contactus" component={ContactUs}></Route>
                  <Route exact path="/property" component={property}></Route>
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AuthState>
      </AlertState>
    </div>
  );
};

export default App;
