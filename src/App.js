import React, { Component } from 'react';
import {Provider} from 'react-redux';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <Landing />
        <Footer /> 
      </Provider>
      
    );
  }

}

export default App;
