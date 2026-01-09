import "../CSS/Favorites.css";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const {favorites} = useContext (MovieContext);

    if (favorites) {
        return (
            <div className="favorites">
                <h1>Your Favorite Movies</h1>
                {favorites.length === 0 ? (
                    <div className="favorites-empty">
                        <h2>No favorites added yet!</h2>
                        <p>Your favorite movies will appear here.</p>
                    </div>
                ) : (
                    <div className="favorites-grid">
                        {favorites.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                )}
            </div>
        );
    }
    return (
        <div className="favorites-empty">
            <h2>No favorites added yet!</h2>
            <p>Your favorite movies will appear here.</p>
        </div>
    );
}

export default Favorites;