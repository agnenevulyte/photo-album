import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
// import App from "./App";
import NavigationBar from './Layout/NavigationBar'
import Home from './Home/index'
import About from  './About'
import Docs from './Docs'
import NotFound from '../NotFound'
import Photo from './Photo'

const Root = () => (
  <Router>
    <NavigationBar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/docs' component={Docs}/>
      <Route path="/photos/:id"> <Photo/></Route>
      <Route component={NotFound} />
    </Switch>
    {/* <Route path="/" component={App} /> */}
  </Router>
);

export default Root;
