import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardImg } from "reactstrap";

const MovieCard = (props) => {
  const history = useHistory();
  
  return (
    <div onClick={() => history.push("/movie-details/1")}>
      <Card>
        <CardImg
          top
          width="300px"
          height="200px"
          src="https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg"
        />
      </Card>
    </div>
  );
};

export default MovieCard;
