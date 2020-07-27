import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, SAVE_TO_WATCHLIST} from './types';
import axios from 'axios'

// dispatch is coming from thunk
export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export const fetchMovies = text => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=9fa6058b&s=${text}`)
    .then(response => dispatch({
        type: FETCH_MOVIES,
        payload: response.data
    }))
    
    .catch(err => console.log(err))
}

export  const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?apikey=9fa6058b&i=${id}`)
    .then(response => dispatch({
        type: FETCH_MOVIE,
        payload: response.data
    }))
    
    .catch(err => console.log(err))
}

export const setLoading = () => {
    return{
        type: LOADING
    }
}

// export const saveMovieToWatchlist = movie => {
//     axios.post('localhost:3000', {movie})
//     .then(response => dispatch({
//         type: SAVE_TO_WATCHLIST
//     }))
//     .catch(err => console.log(err))
// }

export const saveMovieToWatchlist = movie => dispatch => {
        console.log(movie)
        axios.post('http://localhost:3000/movies', movie)
        .then(dispatch({
            type: SAVE_TO_WATCHLIST
        }))
        .then(data => {
            console.log('Success', data)
        })
        .catch(err => console.log('Error:', err))
}