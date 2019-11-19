import React from "react";
// import { Route, Switch } from "react-router-dom";

import './App.css';
// import Home from './components/Home/index'
// import About from  './components/About'
// import Docs from './components/Docs'
// import NotFound from './NotFound'
import Footer from './components/Layout/Footer';
import Root from './components/Root'

const App = () => (
  <div className="app">
    <Root />
    <Footer />
  </div>
);

export default App;
