import { MoviesState, MovieState } from './type';

export type SEARCH_MOVIE_ACTION =
    | { type: 'SEARCH_MOVIE' }
    | { type: 'SET_MOVIE'; payload: MovieState[] }
    | { type: 'SEARCH_MOVIE_ERROR'; payload: string }
    | { type: 'AUTH_SUCCESS' }
    | { type: 'AUTH_FAIL' };

export const MovieReducer = (
    state: MoviesState,
    action: SEARCH_MOVIE_ACTION
) => {
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return { ...state, loading: true };
        case 'SET_MOVIE':
            return {
                ...state,
                movies: action.payload,
                error: false,
                loading: false,
                errorMessage: null,
            };
        case 'SEARCH_MOVIE_ERROR':
            return { ...state, error: true, errorMessage: action.payload };
        case 'AUTH_SUCCESS':
            return { ...state, auth: true };
        case 'AUTH_FAIL':
            return { ...state, auth: false };
        default:
            throw new Error("I Don't know action");
    }
};
