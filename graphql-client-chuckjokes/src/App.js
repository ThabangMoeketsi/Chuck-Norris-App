import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// material-ui
import {
  CssBaseline,
  Container
} from "@material-ui/core";

// redux
import store from './store/store';

// components
import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";

// pages
import Home from "./pages/Home";
import Joke from "./pages/Joke";


const App =() => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <CssBaseline />
          <NavBar />
          <Container maxWidth="lg">
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/joke" component={Joke}/>
              <Route component={Error}/>
            </Switch>
          </Container>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
