import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchMoviesFromWatchlist, deleteMovieFromWatchlist} from '../../actions/searchActions';
import WatchlistMovieCard from './WatchlistMovieCard';



class WatchlistContainer extends Component {

    componentDidMount() {
        this.props.fetchMoviesFromWatchlist();
    }

    handleDeleteMovie = (id) => {
        this.props.deleteMovieFromWatchlist(id);
    }

    render() {
        const {movies} = this.props;

        let content = ''
        content = movies[0] ? movies.map((movie, index) => <WatchlistMovieCard key={index} movie={movie}/>): null;

        return (
            <div>
                <h1>Your Watchlist...</h1>
                <div className="row">
                    {content}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps, {fetchMoviesFromWatchlist, deleteMovieFromWatchlist} )(WatchlistContainer);
