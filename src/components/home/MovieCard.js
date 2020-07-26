import React, { Component } from 'react';

//recieving key and movie
class MovieCard extends Component {

    // will return a "not available" image if a is not available
    handlePosterImg = (src) => {
        const link = src.slice(-4) === 'null' ? 'http://jbdev.nextmp.net/assets/images/posters/movie-poster-missing-2.jpg?v=1' : src
        return link
    }

    handleMovieYear = (release_date) => {
        const year = release_date.slice(0,4)
        const parsed_year = year.length === 4 ? year : 'N/A'
        return parsed_year
    }


    render() {
        const movie = this.props.movie;
        console.log(this.props.movie)
        return (
            <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img 
                    className="w-200 mb-2" 
                    src={this.handlePosterImg(`http://image.tmdb.org/t/p/w200${movie.poster_path}`)}                
                    alt="Movie Cover" />

                <h5 className="text-light card-title">
                    {/* release_date is slicing to pull out ONLY the year */}
                    {movie.title} ({this.handleMovieYear(movie.release_date)})
                </h5>
                <a className="btn btn-primary" href="#">
                    Movie Details
                    <i className="fas fa-chevron-right" />
                </a>
            </div>
        </div>
        );
    }
}

export default MovieCard;

