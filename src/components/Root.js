import React from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import NavigationBar from './Layout/NavigationBar'
import Home from './Home/index'
import About from  './About'
import Docs from './Docs'
import NotFound from '../NotFound'
import Photo from './Photo'
import Photos from './Photos';

const Root = () => (
  <Router>
    <NavigationBar />
    <Switch>
        <Route exact path="/" component={(props) => <Home {...props}/> } />
        <Route exact path='/about' component={(props) => <About {...props}/> } />
        <Route exact path='/docs' component={(props) => <Docs {...props}/> } />
        <Route exact path="/photos" component={(props) => <Photos {...props}/> } />
        <Route path="/photos/:id" component={(props) => <Photo {...props} />} />
        <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Root;