import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {deleteMovieFromWatchlist} from '../../actions/searchActions';
import {connect} from 'react-redux';


//recieving key and movie
class WatchlistMovieCard extends Component {


    render() {
        const { movie } = this.props;

        let moviePosterImg = '';
        moviePosterImg = movie.poster === "N/A" ? 'https://cdn.bestmoviehd.net/share/images/no-cover.png' : movie.poster;


        return (
          <div className="col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
              <img className="w-100 mb-2" src={moviePosterImg} alt="Movie Cover" />
              <h5 className="text-light card-title">
                {movie.title} ({movie.year})
              </h5>
              <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}>
                Learn More
                <i className="fas fa-chevron-right" />
              </Link>
                <button onClick={() => {this.props.deleteMovieFromWatchlist(movie.id)}} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps, {deleteMovieFromWatchlist})(WatchlistMovieCard);

