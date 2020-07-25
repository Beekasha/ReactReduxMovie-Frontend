import React, { Component } from 'react';

import Navbar from './components/Navbar'
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer /> 
      </div>
      
    );
  }

}

export default App;
