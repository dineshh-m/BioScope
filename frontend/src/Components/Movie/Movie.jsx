import './movie.css';
import React from 'react';

function Movie(props) {
    const { movieData } = props;

    return (
        <>
            <div className="movie-wrapper" style={{backgroundImage: `url(${movieData.poster_path})`}}>
            </div>
        </>
    );
}

export default Movie;