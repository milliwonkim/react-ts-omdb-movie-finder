import React from 'react';
import { MovieDiv, MovieSubDiv1 } from '../styles/styles';

const DEFAULT_PLACEHOLDER_IMAGE =
    'https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg';

const Movie = ({
    movie,
}: {
    movie: {
        Poster: string;
        Title: string;
        Year: number;
        imdbID: string;
    };
}) => {
    const poster =
        movie.Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;

    const handleClick = (): void => {
        window.open(`https://imdb.com/title/${movie.imdbID}`);
    };

    return (
        <MovieDiv key={movie.imdbID}>
            <img
                width='300'
                height='400'
                alt={`The movie titled: ${movie.Title}`}
                src={poster}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            />
            <MovieSubDiv1 style={{ padding: '10px' }}>
                <div>
                    <h2>{movie.Title}</h2>
                </div>
                <p>({movie.Year})</p>
            </MovieSubDiv1>
        </MovieDiv>
    );
};

export default Movie;
