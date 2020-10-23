import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Root = () => (
  <Router>
    <Switch>
      <Route exact component={App} path="/" />
      <Route component={Signin} path="/signin"/>
      <Route component={Signup} path="/signup"/>
      <Route component={Checkout} path="/checkout"/>
    </Switch>
  </Router>
)


ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
