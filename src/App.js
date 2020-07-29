import React from 'react';
import {Provider} from 'react-redux';

//Hash router to prevent github upload issues
import {HashRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie'

import store from './store';
import WatchlistContainer from './components/home/WatchlistContainer';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing}/>
            <Route exact path="/movie/:id" component={Movie}/>
            <Route exact path="/watchlist" component={WatchlistContainer} />
            <Footer /> 
          </div>
        </Router>
      </Provider>
      
    );
  }

}

export default App;
