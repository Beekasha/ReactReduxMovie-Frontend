import React, { Component } from 'react';

import {connect} from 'react-redux';

import {fetchMoviesFromWatchlist} from '../../actions/searchActions';

import {Link} from 'react-router-dom'

class WatchlistContainer extends Component {

    componentDidMount() {
        this.props.fetchMoviesFromWatchlist();
    }

    render() {
        const {movies} = this.props

        let content = 
            movies.map(movie => 
            <Link to={'/movie/' + movie.imdbID }>
                <li>
                    {movie.title}
                </li>
            </Link>)

        return (
            <div>
                <h1>Hello from Watchlist</h1>
                <ul>
                    {content}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // movies: state.movies.movies
    movies: state.movies.movies
})

export default connect(mapStateToProps, {fetchMoviesFromWatchlist} )(WatchlistContainer);
