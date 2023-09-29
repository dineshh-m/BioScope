import TabsContainer from '../TabsContainer/TabsContainer';
import { useState  } from 'react';
import './search.css';
import baseURL from '../../constants';

function Search() {
    const [ searchValue, setSearchValue ] = useState("");
    const [ searchKind, setSearchKind ] = useState("movie");
    const [ searchResult, setSearchResult] = useState(null); 
    const searchURL = "/api/search/";

    const handleSearch = () => {
        fetch(baseURL + searchURL + searchKind + '/' + searchValue)
        .then( response => response.json() )
        .then( data =>{ 
            setSearchResult(data.poster_movies);
            console.log("Fetched data", data);
        })
        .catch(error => {
            console.log(error);
        });

    }

    return (
        <>
            <div className="search-wrapper">
                <div className="search-bar-wrapper">
                    <div className="search-bar">
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search BioScope"
                            onChange={(e) => setSearchValue(e.target.value)} />
                    </div>
                    <div className="button-wrapper">
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>

            <div className="tabs-wrapper">
                <TabsContainer setSearchKind={setSearchKind} searchResult={searchResult} />
            </div>
        </>
    )
}

export default Search;