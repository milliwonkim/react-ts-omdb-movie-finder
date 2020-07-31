import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import Movie from './Movie';
import Search from './Search';

import {
    AppDiv,
    MoviesDiv,
    ErrorMessageDiv,
    ProgressDiv,
} from '../styles/styles';

interface MovieState {
    Poster: string;
    Title: string;
    Year: number;
    imdbID: string;
}

const Movies = ({
    movies,
    loading,
    errorMessage,
    search,
}: {
    movies: MovieState[];
    loading: boolean;
    errorMessage: string;
    search: (searchTerm: string) => void;
}) => {
    const retrievedMovies =
        loading && !errorMessage ? (
            <ProgressDiv>
                <CircularProgress />
            </ProgressDiv>
        ) : errorMessage ? (
            <ErrorMessageDiv>{errorMessage}</ErrorMessageDiv>
        ) : (
            <MoviesDiv>
                {movies.map((movie, index: number) => (
                    <Movie key={`${index}-${movie.Title}`} movie={movie} />
                ))}
            </MoviesDiv>
        );

    return (
        <>
            <AppDiv>
                <Search search={search} />
                <p>Sharing a few of our favourite movies</p>
                {retrievedMovies}
            </AppDiv>
        </>
    );
};

export default Movies;
