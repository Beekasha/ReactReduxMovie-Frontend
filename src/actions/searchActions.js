import {SEARCH_MOVIE, FETCH_MOVIES} from './types';
import axios from 'axios'

// dispatch is coming from thunk
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=337f338ffc9eae3e5378cc87107d0a13&language=en-US&query=${text}&page=1&include_adult=false`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data
    }))
    
    .catch(err => console.log(err))
}