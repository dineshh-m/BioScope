import './result.css';
import ResultData from '../ResultData/ResultData';

function Result(props) {
    const { results } = props;
    console.log("The results", results);
    return (
        <>
            <div className="result-data-wrapper">
            {results ? 
                results.length != 0 ?
                    <div className="result-wrapper">
                        <div className="results">
                            {results.map((data, index) => {
                                console.log("Individual data", data);
                                return (
                                    <ResultData key={index} result={data} />
                                );
                            })}
                        </div>
                    </div>
                : <div className="center">
                    <p>No results found</p>
                </div>
            : ""}
            </div>
        </>
    )
}

export default Result;