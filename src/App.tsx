import React, { useEffect, useState } from "react";

import Search from "./components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      setMovieList(data.results);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <main className="">
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />
          <h1 className="">
            Find Your Favorite <span className="text-gradient">Movies</span>{" "}
          </h1>
        </header>
        <div className="">
          <Search searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>
        <section className="">
          <h2 className="">All Movies</h2>
          {isLoading ? (
            <p className="">Loading...</p>
          ) : errorMessage ? (
            <p className="error">{errorMessage}</p>
          ) : (
            <ul className="">
              {movieList.map((movie) => (
                <p key={movie.id} className="text-white-500">
                  {movie.title}
                </p>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
