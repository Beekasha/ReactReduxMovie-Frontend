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
            <React.Fragment>
            <Link to={'/movie/' + movie.imdbID } key={movie.id}>
                <li >
                    {movie.title}
                </li>
            </Link>
            <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </React.Fragment>
            )

        return (
            <div>
                <h1>Your Watchlist...</h1>
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
