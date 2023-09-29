import Movies from "../Movies/Movies";

function Home() {

    return (
        <>
            <Movies apiPath = "/api/home" title="Popular Movies" />
            <Movies apiPath = "/api/popular/tv" title="Popular TV Shows" />
            <Movies apiPath = "/api/movie/top_rated" title="Top Rated Movies" />
            <Movies apiPath = "/api/tv/top_rated" title="Top Rated TV Shows" />
        </>
    )
}

export default Home;