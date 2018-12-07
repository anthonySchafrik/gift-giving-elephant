import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Group from "./components/Group";

const cresteStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={cresteStoreWithMiddleware(reducers)}>
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
