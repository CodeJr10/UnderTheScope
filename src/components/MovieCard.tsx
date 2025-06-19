import type { Movie } from "../utils/movie";
import React from "react";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { title, poster_path, vote_average, original_language, release_date } =
    movie;
  return (
    <div className="movie-card">
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no-movie.png"
        }
        alt={title}
      />

      <h3 className="">{title}</h3>
      <div className="content">
        <div className="rating">
          <img src="star.svg" alt="Star Icon" />
          <p className="">{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>

        <span className="">•</span>
        <p className="lang">{original_language}</p>
        <span className="">•</span>
        <p className="year">
          {" "}
          {release_date ? release_date.split("-")[0] : "N/A"}{" "}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
