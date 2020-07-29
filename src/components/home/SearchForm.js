import React, { Component } from 'react';

import {connect} from 'react-redux';

import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions';



class SearchForm extends Component {

    onChange = event => {
        this.props.searchMovie(event.target.value)
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.fetchMovies(this.props.text);
        this.props.setLoading();
    }


    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    {/* larger heading style,  setting margin/padding */}
                    <h1 className="display-4 mb-3">
                        {/* magnifying glass icon */}
                        <i className="fa fa-search" /> Search For a Film...
                    </h1>
                    <form id="searchForm" onSubmit={this.onSubmit}>
                        <input
                        type="text"
                        className="form-control"
                        name="searchText"
                        placeholder="Search Movies..."
                        onChange={this.onChange}
                        />
                        <button type="submit" className="btn btn-primary btn-bg mt-3">
                            Search
                        </button>
                    </form>
                </div>
          </div>
        );
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie, fetchMovies, setLoading})(SearchForm);