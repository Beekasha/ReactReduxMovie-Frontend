import React, { Component } from 'react';
import {Provider} from 'react-redux';

//Hash router to prevent github upload issues
import {HashRouter as Router} from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Landing />
          <Footer /> 
        </Router>
      </Provider>
      
    );
  }

}

export default App;
