// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Movies from './Movies';
import { AppContext } from '../config/AppContext';

const Home: React.FC = () => {
    const MOVIE_API_URL = 'https://www.omdbapi.com/?s=man&apikey=de08387b';

    const { dispatch, movies, loading, errorMessage } = useContext(AppContext);

    useEffect(() => {
        dispatch({
            type: 'SEARCH_MOVIE',
        });
        axios.get(MOVIE_API_URL).then((res) => {
            if (res.data.Response === 'True') {
                console.log('Movies Found');
                return dispatch({
                    type: 'SET_MOVIE',
                    payload: res.data.Search,
                });
            } else {
                dispatch({
                    type: 'SEARCH_MOVIE_ERROR',
                    payload: res.data.Error,
                });
            }
        });

        // eslint-disable-next-line
    }, [dispatch]);

    const search = (searchValue: string) => {
        dispatch({
            type: 'SEARCH_MOVIE',
        });

        axios
            .get(`https://www.omdbapi.com/?s=${searchValue}&apikey=de08387b`)
            .then((res) => {
                if (res.data.Response === 'True') {
                    return dispatch({
                        type: 'SET_MOVIE',
                        payload: res.data.Search,
                    });
                } else {
                    return dispatch({
                        type: 'SEARCH_MOVIE_ERROR',
                        payload: res.data.Error,
                    });
                }
            });
    };

    return (
        <>
            <Movies
                movies={movies}
                loading={loading}
                errorMessage={errorMessage}
                search={search}
            />
        </>
    );
};

export default Home;
