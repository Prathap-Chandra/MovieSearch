import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import MovieCard from "./MovieCard";
import "./Home.css";

const MovieList = (props) => {
  const { data = [], setPage, page } = props;

  return (
    <>
      <div className="movies-section">
        {data.map((item) => (
          <div className="movie-card">
            <MovieCard {...{ item }} />
          </div>
        ))}
      </div>
      <div
        className="d-flex justify-content-end"
        style={{ paddingRight: "100px" }}
      >
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink previous onClick={() => setPage(page > 1 ? page - 1 : 1)}/>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next onClick={() => setPage(page + 1)} />
          </PaginationItem>
        </Pagination>
      </div>
    </>
  );
};

export default MovieList;
