import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./components/app/app.js";
import { rootReducer } from "./services/reducers/index.jsx";
import { compose, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>    
      <Provider store={store}>
        <App />
      </Provider>    
  </React.StrictMode>
);

reportWebVitals();
