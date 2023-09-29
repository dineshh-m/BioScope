import { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import baseURL from '../../constants';

import './movies.css';

function Movies(props) {
    const [data, setData]  = useState(null);
    const { apiPath, title } = props;
    useEffect(() => {
        const apiURL = baseURL + apiPath;
        
        fetch(apiURL)
            .then(response => {
                if(!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(responseData => {
                setData(responseData.poster_movies);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    // if(data) console.log(data);

    return (
        <>
            <div className="movies-wrapper">
                <div className="title-wrapper">
                    <h2 className="sec-title">{title}</h2>
                </div>
                {data ? (
                    <div className="movies">
                        {data.map((item, index) => {
                           return <Movie key={index} movieData={item} />
                        })}
                     </div>
                ) : (
                    <p>Loading</p>
                )}
            </div>
        </>
    )
}

export default Movies;