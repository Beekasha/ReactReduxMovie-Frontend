import React, { Component } from 'react';

import {connect} from 'react-redux';

import {fetchMoviesFromWatchlist, deleteMovieFromWatchlist} from '../../actions/searchActions';


import {Link} from 'react-router-dom'

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

    // parseMovieForMovieCards = movie => {
    //     let parsedMovie = {};
    //     parsedMovie.Title = movie.title
    //     parsedMovie.Year = movie.year
    //     parsedMovie.Rated = movie.rated
    //     parsedMovie.Released = movie.released
    //     parsedMovie.Runtime = movie.runtime
    //     parsedMovie.Director = movie.director
    //     parsedMovie.Plot = movie.plot
    //     parsedMovie.Poster = movie.poster
    //     parsedMovie.Response = movie.response
    //     parsedMovie.Actors = movie.actors
    //     parsedMovie.Genre = movie.genre
    //     parsedMovie.imdbRating = movie.imdbRating
    //     parsedMovie.imdbID = movie.imdbID
    //     return parsedMovie;
    // }

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
