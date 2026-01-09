import { useState, useEffect } from "react";
import { getMovieVideos } from "../services/api";
import "../CSS/MoviePlayer.css";

function MoviePlayer({ movie, onClose }) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                setLoading(true);
                const movieVideos = await getMovieVideos(movie.id);
                // Filter for YouTube trailers
                const trailers = movieVideos.filter(
                    (video) => video.site === "YouTube" && (video.type === "Trailer" || video.type === "Teaser")
                );
                setVideos(trailers);
                if (trailers.length === 0) {
                    setError("No trailers available for this movie.");
                }
            } catch (err) {
                setError("Failed to load video.");
            } finally {
                setLoading(false);
            }
        };

        if (movie) {
            fetchVideos();
        }
    }, [movie]);

    if (!movie) return null;

    return (
        <div className="movie-player-overlay" onClick={onClose}>
            <div className="movie-player-container" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <div className="movie-player-header">
                    <h2>{movie.title}</h2>
                    <p>{movie.release_date}</p>
                </div>
                {loading ? (
                    <div className="player-loading">Loading trailer...</div>
                ) : error || videos.length === 0 ? (
                    <div className="player-error">
                        <p>{error || "No trailers available for this movie."}</p>
                        <p className="player-fallback">
                            You can search for "{movie.title}" on YouTube to watch trailers.
                        </p>
                    </div>
                ) : (
                    <div className="video-wrapper">
                        <iframe
                            src={`https://www.youtube.com/embed/${videos[0].key}?autoplay=1`}
                            title={videos[0].name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="video-iframe"
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MoviePlayer;

