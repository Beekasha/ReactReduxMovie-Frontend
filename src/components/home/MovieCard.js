import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//recieving key and movie
class MovieCard extends Component {


    render() {
        const movie = this.props.movie;
        console.log(this.props.movie)
        return (
            <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img 
                    className="w-200 mb-2" 
                    src="postersrc"               
                    alt="Movie Cover" />

                <h5 className="text-light card-title">
                    {/* release_date is slicing to pull out ONLY the year */}
                    {movie.title} - movie year
                </h5>
                <Link className="btn btn-primary" to={'/movie/' + movie.id}>
                    Movie Details
                    <i className="fas fa-chevron-right" />
                </Link>
            </div>
        </div>
        );
    }
}

export default MovieCard;

