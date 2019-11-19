import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import NavigationBar from './components/Layout/NavigationBar';
import Home from './components/Home/index'
import About from  './components/About'
import Docs from './components/Docs'
// import NotFound from './NotFound'
import Root from './components/Root'
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
        {/* <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/docs' component={Docs}/>
          <Route component={NotFound} />
        </Switch> */}
        <Root />
        <Footer/>
    </div>
  );
}

export default App;
