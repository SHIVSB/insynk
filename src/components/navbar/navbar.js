import React, { useState } from "react";
import insynklogo from "../../images/insynk_logo.png";
import union from "../../images/Union.png";
import "./navbar.css";
import MovieSearchContext from "../context/MovieSearchContext";

const Navbar = ({ children }) => {
  const [movieData, setMovieData] = useState();
  const [visibility, setVisibility] = useState(false);
  const [modalMovie, setModalMovie] = useState({});
  const apiKey = process.env.REACT_APP_API_KEY;

  const fetchData = async (queryValue) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${queryValue}&page=1&include_adult=false`
    );
    const data = await response.json();
    setMovieData(data);
  };

  const trueVisibility = () => setVisibility(true);
  const falseVisibility = () => setVisibility(false);
  const updateModalMovie = (movie) => setModalMovie(movie);

  return (
    <MovieSearchContext.Provider
      value={{
        visibility,
        trueVisibility,
        falseVisibility,
        updateModalMovie,
        modalMovie,
        movieData,
      }}
    >
      <div className="navbar">
        <div>
          <img
            style={{
              height: "54px",
              width: "156px",
              position: "absolute",
            }}
            src={insynklogo}
            alt="Insynk logo"
          />
        </div>
        <div>
          <div className="search-wrapper">
            <input
              className="search-input"
              placeholder="Search for a movie"
              onChange={(event) => fetchData(event.target.value)}
            />
            <img className="search-pic" src={union} alt="Search icon" />
          </div>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      {children}
    </MovieSearchContext.Provider>
  );
};

export default Navbar;
