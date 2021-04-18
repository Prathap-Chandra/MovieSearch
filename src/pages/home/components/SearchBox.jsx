import React, { useState } from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

import "./Home.css";

const SearchBox = (props) => {
  const { search, setSearch, searchParam, setSearchParam } = props;

  return (
    <div className="search-box">
      <InputGroup>
        <Input
          placeholder="Search.."
          onChange={(data) => setSearchParam(data?.target?.value ?? "")}
          value={searchParam}
        />
        <InputGroupAddon addonType="prepend">
          <Button color="info" onClick={() => setSearch(true)} disabled={search}>
            Search
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default SearchBox;
