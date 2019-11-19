import React from 'react'
import { BrowserRouter as Router, Route , Switch} from "react-router-dom"
// import App from "./App"
import Home from './Home'
import About from  './About'
import Docs from './Docs'
import NotFound from '../NotFound'
import NavigationBar from './Layout/NavigationBar';
export default function Root() {
    return (
        <Router>
            {/* <Route path="/" component={App} /> */}
            <NavigationBar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/docs' component={Docs}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}
