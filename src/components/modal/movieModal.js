import React from "react";
import close from "../../images/close.png";
import "./movieModal.css";
import MovieSearchContext from "../context/MovieSearchContext";

export default function MovieModal() {
  const { visibility, falseVisibility, modalMovie } =
    React.useContext(MovieSearchContext);

  const dateString = modalMovie.release_date;
  const date = new Date(dateString);
  const month = date.getMonth();
  const day = date.getDate();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const formattedDate = `${monthNames[month]} ${day}, ${date.getFullYear()}`;

  return (
    <div
      style={{
        position: visibility && "fixed",
        top: 0,
        left: 0,
        height: visibility && "100vh",
        width: visibility && "100vw",
        backgroundColor: visibility && "rgba(0, 0, 0, 0.4)",
        backdropFilter: visibility && "blur(1px)",
      }}
    >
      {visibility && (
        <div className="modal">
          <div className="topLine">
            <div className="title">
              <div>{modalMovie.title}</div>
            </div>
            <div style={{ border: "2px solid gray" }}>
              <img
                alt="close button"
                style={{ padding: "6px 6px 2px 6px" }}
                onClick={() => {
                  falseVisibility();
                }}
                src={close}
              />
            </div>
          </div>
          <div
            style={{
              marginLeft: "27px",
              marginRight: "27px",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
            className="modalinside"
          >
            <div style={{ marginRight: "22px" }}>
              <img
                alt="modal"
                className="modalMovieImage"
                src={
                  "https://www.themoviedb.org/t/p/w440_and_h660_face" +
                  modalMovie.poster_path
                }
              />
            </div>
            <div>
              <div>
                <span style={{ fontWeight: "bold" }}>Release Date</span> :{" "}
                {formattedDate}
              </div>
              <div style={{ marginTop: "15px" }}>{modalMovie.overview}</div>
              <div style={{ marginTop: "15px" }}>
                <span style={{ fontWeight: "bold" }}>
                  {modalMovie.vote_average}
                </span>
                / 10 ({modalMovie.vote_count} total votes)
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
