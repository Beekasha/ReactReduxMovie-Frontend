import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import { Button } from 'react-bootstrap';

import {fetchMovie, setLoading, saveMovieToWatchlist} from '../../actions/searchActions'
import LoadingSpinner from '../layout/LoadingSpinner';


export class Movie extends Component {

    componentDidMount() {
        this.props.fetchMovie(this.props.match.params.id)
        this.props.setLoading();
    }

    prepMovieForApi = movie => {
        const parsed_movie = {}
        parsed_movie.title = movie.Title
        parsed_movie.year = movie.Year
        parsed_movie.rated = movie.Rated
        parsed_movie.released = movie.Released
        parsed_movie.runtime = movie.Runtime
        parsed_movie.director = movie.Director
        parsed_movie.plot = movie.Plot
        parsed_movie.poster = movie.Poster
        parsed_movie.response = movie.Response
        parsed_movie.actors = movie.Actors
        parsed_movie.genre = movie.Genre
        parsed_movie.imdbRating = movie.imdbRating
        parsed_movie.imdbID = movie.imdbID
        return parsed_movie

    }

    handleAddToWatchlistClick = () => {
        //drop this in my DB
        const parsed_movie = this.prepMovieForApi(this.props.movie)
        this.props.saveMovieToWatchlist(parsed_movie)
    }

    render() {
        const {loading, movie} = this.props;


        let movieInfo = (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 card card-body">
                        <img src={movie.Poster} className="thumbnail" alt="Poster" />
                    </div>
                    <div className="col-md-8">
                        <h2 className="mb-4">{movie.Title}</h2>
                        <Button  onClick={this.handleAddToWatchlistClick} variant="primary" size="lg" block> Add to Watchlist </Button>
                        <br></br>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <strong>Genre:</strong> {movie.Genre}
                            </li>
                          
                            <li className="list-group-item">
                                <strong>Released:</strong> {movie.Released}
                            </li>
                            <li className="list-group-item">
                                <strong>Rated:</strong> {movie.Rated}
                            </li>
                            <li className="list-group-item">
                                <strong>IMDB Rating:</strong> {movie.imdbRating}/10
                            </li>
                            <li className="list-group-item">
                                <strong>Director:</strong> {movie.Director}
                            </li>
                            <li className="list-group-item">
                                <strong>Writer:</strong> {movie.Writer}
                            </li>
                            <li className="list-group-item">
                                <strong>Runtime:</strong> {movie.Runtime}
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="row">
                    <div className="card card-body bg-dark my-5 text-light">
                        <div className="col-md-12">
                        <h3>About </h3>
                        {movie.Plot}
                        <hr />
                        <a
                            href={`https://www.imdb.com/title/${movie.imdbID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View on TMDB
                        </a>
                        <Link to="/" className="btn btn-default text-light">
                            Go Back To Search
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )

        let content = loading ? <LoadingSpinner /> : movieInfo;
        return (
            <div>{content}</div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading,
    movie: state.movies.movie
})

export default connect(mapStateToProps, {fetchMovie, setLoading, saveMovieToWatchlist})(Movie);