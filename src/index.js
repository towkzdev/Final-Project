import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyRoute from './MyRoute';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"

//Redux
import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './resucers';


const store = createStore(rootReducer,composeWithDevTools())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MyRoute />
      </BrowserRouter>
    </Provider>,
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
