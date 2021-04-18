import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBox from "../components/SearchBox";
import MoviesList from "../components/MoviesList";
import "../components/Home.css";

const apiKey = "2fb73390-00f5-423a-b77c-55f42306deeb";

const Home = (props) => {
  const [data, setData] = useState([]);
  const [searchParam, setSearchParam] = useState("blade");
  const [search, setSearch] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (search || page) {
      console.log(page, "page");
      axios
        .get(
          `http://www.omdbapi.com/?s=${searchParam}&page=${page}&apikey=${apiKey}`
        )
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setSearch(false);
    }
  }, [search, page]);

  return (
    <div className="home">
      <SearchBox {...{ search, setSearch, searchParam, setSearchParam }} />
      <MoviesList {...{ data: [1, 2, 3, 4, 5], setPage }} />
    </div>
  );
};

export default Home;
