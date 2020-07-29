import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchMoviesFromWatchlist, deleteMovieFromWatchlist} from '../../actions/searchActions';
import WatchlistMovieCard from './WatchlistMovieCard';



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
        const {movies} = this.props;

        
        let content = ''

        // let parsedMovies = movies.map(movie => parseMovieForMovieCards(movie))

        content = movies[0] ? movies.map((movie, index) => <WatchlistMovieCard key={index} movie={movie}/>): null;
        console.log(movies)

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
    // movies: state.movies.movies
    movies: state.movies.movies
})

export default connect(mapStateToProps, {fetchMoviesFromWatchlist, deleteMovieFromWatchlist} )(WatchlistContainer);
