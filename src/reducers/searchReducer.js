import {SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING, FETCH_MOVIES_FROM_WATCHLIST, DELETE_MOVIE_FROM_WATCHLIST} from '../actions/types';

const initialState = {
    text : '',
    movies : [],
    loading: false,
    movie: []
}

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state,
                text: action.payload,
                loading: false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        case FETCH_MOVIE:
            return {
                ...state,
                movie: action.payload, 
                loading: false
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_FROM_WATCHLIST:
            return {
                ...state,
                movies: action.payload,
                loading: false
                }
        case DELETE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                movies: action.payload,
                loading: false
            }
        default:
            return state
    }
}