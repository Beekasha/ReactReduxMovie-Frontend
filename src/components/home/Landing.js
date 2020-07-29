import React, { Component } from 'react';
import { connect } from 'react-redux'
import SearchForm from './SearchForm';
import LoadingSpinner from '../layout/LoadingSpinner'
import MoviesContainer from './MoviesContainer'

class Landing extends Component {
    render() {
        const {loading} = this.props
        return (
            <div className="container">
                <SearchForm />
                {loading ? <LoadingSpinner /> : <MoviesContainer />}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})


export default connect(mapStateToProps)(Landing);