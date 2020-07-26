import React, { Component } from 'react';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Footer /> 
      </div>
      
    );
  }

}

export default App;
