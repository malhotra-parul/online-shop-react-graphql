import React from 'react';
import ReactDOM from 'react-dom';
import "gestalt/dist/gestalt.css";
import App from './components/App';
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from "@apollo/client"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${API_URL}/graphql`
  }),
  cache: new InMemoryCache()
})

const Root = () => (
  <Router>
    <>
    <Navbar />
    <Switch>
      <Route exact component={App} path="/" />
      <Route component={Signin} path="/signin"/>
      <Route component={Signup} path="/signup"/>
      <Route component={Checkout} path="/checkout"/>
    </Switch>
    </>
  </Router>
)


ReactDOM.render(
  <ApolloProvider client={client}>
    <Root />
    </ApolloProvider>,
  document.getElementById('root')
);
