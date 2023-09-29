import './resultdata.css';

function ResultData(props) {
    const { result } = props;
    
    return (
        <>
             <div className="result" >
                <img  className='result-image' src={result.poster_path} alt="" />
            </div>
        </>
    )
}

export default ResultData;