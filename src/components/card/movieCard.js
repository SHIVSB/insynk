import React, { useContext } from "react";
import "./movieCard.css";
import MovieSearchContext from "../context/MovieSearchContext";

export default function MovieCard(props) {
  const { visibility, trueVisibility, updateModalMovie } =
    useContext(MovieSearchContext);

  return (
    <>
      {props.movie && (
        <div
          onClick={() => {
            updateModalMovie(props.movie);
            trueVisibility();
          }}
          className="movieCard"
        >
          <div className="outerCard">
            <div
              style={{
                position: visibility ? "" : "relative",
              }}
              className="averageCover"
            >
              <div className="movieAverage">{props.movie.vote_average}</div>
            </div>

            <img
              alt="movie"
              className="movieImage"
              src={
                "https://www.themoviedb.org/t/p/w440_and_h660_face" +
                props.movie.poster_path
              }
            />
          </div>
          <div className="movieTitle">{props.movie.title}</div>
        </div>
      )}
    </>
  );
}
