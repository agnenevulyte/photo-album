import React from 'react';

import './App.css';
import NavigationBar from './components/Layout/NavigationBar';
import Home from './components/Home/index'
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="App">
        <NavigationBar />
        <Home />
        <Footer/>
    </div>
  );
}

export default App;
