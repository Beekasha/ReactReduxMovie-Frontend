import React, { Component } from 'react';
import {Provider} from 'react-redux';

//Hash router to prevent github upload issues
import {HashRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie'

import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {/* does router have to wrap it's children in a div? */}
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/movie/:id" component={Movie}/>

            <Footer /> 
          </div>
        </Router>
      </Provider>
      
    );
  }

}

export default App;
