import './MovieCard.css'


function MovieCard({movie}){

    function onFav(){
        alert(`You have favorited ${movie.title}`)
    }


    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt ={movie.title}></img>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFav}>❤️</button>
            </div>
        </div>

        <div className="movie-details">
            <h2 className="movie-title">{movie.title}</h2>
            <p className="movie-year">{movie.year}</p>
        </div>
    </div>
}

export default MovieCard