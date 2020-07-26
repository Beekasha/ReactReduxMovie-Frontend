import React, { Component } from 'react';

import {connect} from 'react-redux'

import MovieCard from './MovieCard'
export class MoviesContainer extends Component {
    render() {
        const {movies} = this.props;
        const {results} = movies;
        let content = '';
        content = movies.page === 1 ? results.map((movie, index) => <MovieCard key={index} movie={movie}/>) : null ;
        return (
            <div className="row">
                {content}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    movies: state.movies.movies
})
export default connect(mapStateToProps)(MoviesContainer);