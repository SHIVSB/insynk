import React, { useState, useEffect } from "react";
import MovieCard from "../card/movieCard";
import "./movies.css";
import MovieSearchContext from "../context/MovieSearchContext";
import MovieModal from "../modal/movieModal";

export default function Movies() {
  const { movieData, visibility } = React.useContext(MovieSearchContext);
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=" +
          process.env.REACT_APP_API_KEY
      )
        .then((response) => response.json())
        .then((data) => {
          setResponseData(data);
        });
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="movies">
        <div className="movieheading">Most Recent Movies</div>
        {visibility && <MovieModal />}
        <div className="movieswrap">
          {movieData && movieData.page
            ? movieData.results &&
              movieData.results.map((movie) => {
                return <MovieCard movie={movie} />;
              })
            : responseData.results &&
              responseData.results.map((movie) => {
                return <MovieCard movie={movie} />;
              })}
        </div>
      </div>
    </>
  );
}
