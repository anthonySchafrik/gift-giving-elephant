import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch, HashRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AccountSetting from "./components/AccountSetting";
import Group from "./components/Group";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import reducers from "./reducers";
import SighUp from "./components/Sighup";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/Account" component={AccountSetting} />
          <Route path="/SighUp" component={SighUp} />
          <Route path="/Group" component={Group} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </HashRouter>
  </Provider>,
  document.querySelector("#root")
);
