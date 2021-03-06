import React, { useState, FormEvent, ChangeEvent } from 'react';
import { SearchText, SearchForm, SearchSubmit } from '../styles/styles';
import FilterHolder from './FilterHolder';

const Search = ({ search }: { search: (searchValue: string) => void }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    // eslint-disable-next-line
    const [letters, setLetters] = useState(['man', 'begin', 'spider', 'korea']);

    const resetInputField = (): void => {
        setSearchValue('');
    };

    const handleChanges = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.target.value);
    };

    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        search(searchValue);
        resetInputField();
    };

    const handleUpdate = (letter) => {
        setSearchValue(letter);
        search(letter);
    };

    return (
        <>
            <FilterHolder letters={letters} updateValue={handleUpdate} />

            <SearchForm onSubmit={handleSubmit}>
                <SearchText
                    value={searchValue}
                    onChange={handleChanges}
                    type='text'
                />
                <SearchSubmit type='submit' value='SEARCH' />
            </SearchForm>
        </>
    );
};

export default Search;
