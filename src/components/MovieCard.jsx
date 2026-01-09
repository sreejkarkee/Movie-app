import "../CSS/MovieCard.css";
import { useContext, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MoviePlayer from "./MoviePlayer";

function MovieCard({movie}){

    const {addToFavorites, removeFromFavorites, isFavorite} = useContext (MovieContext);
    const [showPlayer, setShowPlayer] = useState(false);
    const favorite= isFavorite (movie.id);
    
    function onFav(e){
        e.preventDefault();
        e.stopPropagation();
        if (favorite){
            removeFromFavorites (movie.id);
        }
        else{
            addToFavorites (movie);
        }
    }

    function onPlay(e) {
        e.preventDefault();
        e.stopPropagation();
        setShowPlayer(true);
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt ={movie.title}></img>
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? "favorited" : "active"}`} onClick={onFav}>🤍</button>
                        <button className="play-btn" onClick={onPlay}>▶</button>
                    </div>
                </div>

                <div className="movie-details">
                    <h2 className="movie-title">{movie.title}</h2>
                    <p className="movie-year">{movie.release_date}</p>
                </div>
            </div>
            {showPlayer && <MoviePlayer movie={movie} onClose={() => setShowPlayer(false)} />}
        </>
    );
}

export default MovieCard