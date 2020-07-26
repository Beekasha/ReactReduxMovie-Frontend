import React, { Component } from 'react';

//recieving key and movie
class MovieCard extends Component {
    // findImg = (imgUrl) => {
    //     if (imgUrl === null) {
    //         return {src='http://jbdev.nextmp.net/assets/images/posters/movie-poster-missing-2.jpg?v=1'}
    //     }
    // }


    render() {
        const movie = this.props.movie;
        console.log(this.props.movie)
        return (
            <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img 
                    className="w-200 mb-2" 
                    src={`http://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                
                    alt="Movie Cover" />

                <h5 className="text-light card-title">
                    {/* release_date is slicing to pull out ONLY the year */}
                    {movie.title} ({movie.release_date.slice(0, 4)})
                </h5>
                <a className="btn btn-primary" to={'/movie/' + "IMDB ID"} />
                    Movie Details
                    <i className="fas fa-chevron-right" />
            </div>
        </div>
        );
    }
}

export default MovieCard;

