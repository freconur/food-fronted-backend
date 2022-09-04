import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index.js";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore()

root.render(
    <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>,
    </React.StrictMode>
  
);

