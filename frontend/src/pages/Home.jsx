import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home(){
    const [searchQuery, SetSearchQuery] = useState("");

    const[movies, setMovies] = useState([]);
    const[error, setError] = useState(null);
    const[loading, setLoading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async()=>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("Failed to load ,ovies...")
            }
            finally{
                setLoading(false)
            }

        }

        loadPopularMovies()

    },[])
    
    const handleSearch = () =>{
        

    }
    return <dic className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"
            value={searchQuery} onChange={(e) => SetSearchQuery(e.target.value)}></input>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => movie.title.toLocaleLowerCase().startsWith(searchQuery) &&
            (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </dic>

}

export default Home;