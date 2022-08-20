import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = () => {
  const { movies, filterByTitle, filterByDescription } = useSelector(
    (state) => state.movies
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1.5rem",
      }}
    >   
      {movies
        .filter((movie) => {
          return (
            movie.title
              .trim()
              .toLowerCase()
              .includes(filterByTitle.trim().toLowerCase()) &&
            movie.description
              .trim()
              .toLowerCase()
              .includes(filterByDescription.trim().toLowerCase())
          );
        })
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
