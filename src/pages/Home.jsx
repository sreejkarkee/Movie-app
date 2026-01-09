import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {

    const [searchQuery, setSearchQuery] = useState("");
  const movies = [
    { id: 1, title: "Inception", year: 2010 },
    { id: 2, title: "The Dark Knight", year: 2008 },
    { id: 3, title: "Interstellar", year: 2014 },
    { id: 4, title: "Parasite", year: 2019 },
    { id: 5, title: "The Matrix", year: 1999 },
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    alert(`Searching for ${searchQuery}`);
    setSearchQuery("");

  }
  return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
        <input type="text" className="search-input" placeholder="Search movies..."  value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type="submit" className="search-btn">Search</button>
        </form>
      <div className="movies-grid">
        {movies.map((movies) =>
       (
          <MovieCard key={movies.id} movie={movies} />
        ))}
      </div>
    </div>
  );
}

export default Home;