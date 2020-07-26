import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid mt-5 text-center">
                <div className="container">
                    {/* larger heading style,  setting margin/padding */}
                    <h1 className="display-4 mb-3">
                        {/* magnifying glass icon */}
                        <i className="fa fa-search" /> Search For a Film...
                    </h1>
                    <form id="searchForm">
                        <input
                        type="text"
                        className="form-control"
                        name="searchText"
                        placeholder="Search Movies..."
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

export default SearchForm;