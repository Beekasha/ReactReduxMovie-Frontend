import React, { Component } from 'react';

import {connect} from 'react-redux';

import {fetchMoviesFromWatchlist, deleteMovieFromWatchlist} from '../../actions/searchActions';


import {Link} from 'react-router-dom'

class WatchlistContainer extends Component {

    componentDidMount() {
        this.props.fetchMoviesFromWatchlist();
    }

    handleDeleteMovie = (id) => {
        // this.props.deleteMovieFromWatchlist(id)
        console.log('id:', id)
        this.props.deleteMovieFromWatchlist(id);
    }

    render() {
        const {movies} = this.props

        let content = 
            movies.map(movie => 
            <React.Fragment key={movie.id}>
            <Link to={'/movie/' + movie.imdbID } >
                <li >
                    {movie.title}
                </li>
            </Link>
            <button onClick={() => {this.handleDeleteMovie(movie.id)}} type="button" className="close" aria-label="Close">
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

export default connect(mapStateToProps, {fetchMoviesFromWatchlist, deleteMovieFromWatchlist} )(WatchlistContainer);
