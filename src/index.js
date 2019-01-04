import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import thunk from "redux-thunk";

import reducers from "./reducers";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Group from "./components/Group";
import LoginSighup from "./components/LoginSighup";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/Group" component={Group} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.querySelector("#root")
);
