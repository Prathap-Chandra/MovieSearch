import React from "react";

import "./MovieDetails.css";

const data = {
  Title: "Guardians of the Galaxy Vol. 2",
  Year: "2017",
  Rated: "PG-13",
  Released: "05 May 2017",
  Runtime: "136 min",
  Genre: "Action, Adventure, Comedy, Sci-Fi",
  Director: "James Gunn",
  Writer:
    "James Gunn, Dan Abnett (based on the Marvel comics by), Andy Lanning (based on the Marvel comics by), Steve Englehart (Star-Lord created by), Steve Gan (Star-Lord created by), Jim Starlin (Gamora and Drax created by), Stan Lee (Groot created by), Larry Lieber (Groot created by), Jack Kirby (Groot created by), Bill Mantlo (Rocket Raccoon created by), Keith Giffen (Rocket Raccoon created by), Steve Gerber (Howard the Duck created by), Val Mayerik (Howard the Duck created by)",
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel",
  Plot:
    "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  Language: "English",
  Country: "USA",
  Awards: "Nominated for 1 Oscar. Another 15 wins & 57 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.6/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "85%",
    },
    {
      Source: "Metacritic",
      Value: "67/100",
    },
  ],
  Metascore: "67",
  imdbRating: "7.6",
  imdbVotes: "578,093",
  imdbID: "tt3896198",
  Type: "movie",
  DVD: "10 Jul 2017",
  BoxOffice: "$389,813,101",
  Production: "Walt Disney Pictures, Marvel Studios",
  Website: "N/A",
  Response: "True",
};

const MovieDetails = (props) => {
  return (
    <div className="movie-container">
      <h1>
        {data?.Title} {"::"}
        {data?.imdbRating}/10
      </h1>
      <p>
        <b>
          {data?.Rated} | {data?.Released} | {data?.Genre} | {data?.Runtime}
        </b>
      </p>
      <div className="d-flex justify-content-start" style={{ height: "100%" }}>
        <img src={data?.Poster} alt="" />
        <div className="d-flex flex-column" style={{ paddingLeft: "25px" }}>
          <p>
            <b>Director: </b> {data?.Director}
          </p>
          <p>
            <b>Writer: </b> {data?.Writer}
          </p>
          <p>
            <b>Actors: </b> {data?.Actors}
          </p>
          <p>
            <b>Plot: </b> {data?.Plot}
          </p>
          <p>
            <b>Language: </b> {data?.Language}
          </p>
          <p>
            <b>Country: </b> {data?.Country}
          </p>
          <p>
            <b>Awards: </b> {data?.Awards}
          </p>
          <p>
            <b>Box Office: </b> {data?.BoxOffice}
          </p>
          <p>
            <b>Production: </b> {data?.Production}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
