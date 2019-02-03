import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducer from "./reducers/index";
import { BrowserRouter, Route } from "react-router-dom";

//CONTAINERS
import Home from "./containers/home";
import Todos from "./containers/todos";
import "./styles.css";

const storeWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/todos" component={Todos} />
        </div>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={storeWithMiddleware(reducer)}>
    <App />
  </Provider>,
  rootElement
);
