import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import combineReducers from "./reducers";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Root from './components/Root'

const store = createStore(
    combineReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));

