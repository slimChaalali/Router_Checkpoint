import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ movies, setFilteredMovies }) => {
    const [titleFilter, setTitleFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');

    const handleTitleFilterChange = (event) => {
        setTitleFilter(event.target.value);
        setRatingFilter('');
    };

    const handleRatingFilterChange = (event) => {
        setRatingFilter(event.target.value);
        setTitleFilter('');
    };

    const applyFilters = () => {
        const filtered = movies.filter((movie) => {
            if (titleFilter) {
                return movie.title.toLowerCase().includes(titleFilter.toLowerCase());
            }

            if (ratingFilter) {
                return movie.rating.includes(ratingFilter);
            }

            return true;
        });

        setFilteredMovies(filtered);
    };

    return (

        <div className='filter'>
            <h1>Choose Your Movie</h1>
            <div className='search'>
                <input
                    type="text"
                    placeholder="Search by title"
                    value={titleFilter}
                    onChange={handleTitleFilterChange}
                />
                <select
                    value={ratingFilter}
                    onChange={handleRatingFilterChange}
                >
                    <option value="">Search by rating</option>
                    <option value="1/5">1/5</option>
                    <option value="2/5">2/5</option>
                    <option value="3/5">3/5</option>
                    <option value="4/5">4/5</option>
                    <option value="5/5">5/5</option>
                </select>
                <button onClick={applyFilters}><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    );
};

export default Filter;