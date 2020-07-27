import React, { Component } from 'react';

import {connect} from 'react-redux';

import MovieCard from './MovieCard'
import {fetchMoviesFromWatchlist} from '../../actions/searchActions';

class WatchlistContainer extends Component {

    componentDidMount() {
        const movies = this.props.fetchMoviesFromWatchlist();
        console.log(movies)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Hello from Watchlist</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // movies: state.movies.movies
    movies: fetchMoviesFromWatchlist()
})

export default connect(mapStateToProps, {fetchMoviesFromWatchlist} )(WatchlistContainer);
