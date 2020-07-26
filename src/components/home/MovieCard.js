import React, { Component } from 'react';

//recieving key and movie
class MovieCard extends Component {
    render() {
        const movie = this.props.movie;
        console.log(this.props.movie)
        return (
            // <div className="col-md-3 mb-5">
            //     <div className="card card-body bg-dark text-center h-100">
            //         <img className="w-100 mb-2" src={'image.tmdb.org/t/p/w500' + movie.results.poster_path} alt="Movie Cover" />
            //         <img className="w-100 mb-2" src={'image.tmdb.org/t/p/w500' + movie.results.poster_path} alt="Movie Cover" />

            //         <h5 className="text-light card-title">
            //             {movie.results.title} - {movie.results.release_date}
            //         </h5>
            //         <a className="btn btn-primary" to={'/movie/' + movie.imdbID} />
            //             Movie Details
            //             <i className="fas fa-chevron-right" />
                    
            //     </div>
            // </div>
            <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img className="w-100 mb-2" src='Posterpath' alt="Movie Cover" />

                <h5 className="text-light card-title">
                    {movie.title} - Movie Date
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