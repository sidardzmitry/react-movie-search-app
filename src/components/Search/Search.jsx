import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Radio from "../../UI/Radio/Radio";
import styles from "./Search.module.css";

const Search = (props) => {
  const { searchMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const changeInput = (event) => {
    setSearch(event.target.value);
  };

  const handleKey = (event) => {
    if (event.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <div className={styles["container-search"]}>
      <div className={styles.search}>
        <Input
          search={search}
          changeInput={changeInput}
          handleKey={handleKey}
        />
        <Button searchMovies={searchMovies} search={search} type={type} />
      </div>
      <div className={styles["radio"]}>
        <Radio type={type} handleFilter={handleFilter} />
      </div>
    </div>
  );
};

export default Search;