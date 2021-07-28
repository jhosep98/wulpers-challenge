import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {
  createStyles,
  alpha,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
    },
  })
);

const Search = () => {
  const classes = useStyles();
  const [searchInput, setSearchInput] = useState("");
  const { setSearchValue } = useContext(SearchContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    setSearchValue(searchInput);
    setTimeout(() => {
      setSearchInput("");
    }, 1000);
  };

  const onChangeSearch = (e) => {
    if(e.target.value.length >= 3){
      setSearchInput(e.target.value);
      setSearchValue(e.target.value);
    }
    setSearchInput(e.target.value);
  }

  return (
    <>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <form onSubmit={handleSubmit}>
          <InputBase
            placeholder="Search Name"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={onChangeSearch}
            value={searchInput}
          />
        </form>
      </div>
    </>
  );
};

export default Search;
