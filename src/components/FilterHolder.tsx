import React from 'react';
import Filter from './Filter';
import { StyledFilter } from '../styles/styles';

const FilterHolder = ({
    updateValue,
    letters,
}: {
    updateValue: (value: string) => void;
    letters: Array<string>;
}) => {
    const createButtons = () => {
        return letters.map((letter, index) => (
            <Filter key={index} letter={letter} updateValue={updateValue} />
        ));
    };

    return (
        <div>
            <h3>RECOMMANDATION FILTERS</h3>
            <StyledFilter>{createButtons()}</StyledFilter>
        </div>
    );
};

export default FilterHolder;
