import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends Component {


    render() {
        const { movie } = this.props;

        let moviePosterImg = '';
        moviePosterImg = movie.Poster === "N/A" ? 'https://cdn.bestmoviehd.net/share/images/no-cover.png' : movie.Poster;


        return (
          <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
              <img className="w-100 mb-2" src={moviePosterImg} alt="Movie Cover" />
              <h5 className="text-light card-title">
                {movie.Title} ({movie.Year})
              </h5>
              <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
                Learn More
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
          </div>
        );
      }
}

export default MovieCard;

