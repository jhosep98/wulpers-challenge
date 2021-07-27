import styled from "styled-components";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";

import Search from "./Search";

const AppBarContainer = styled.div`
  flex-grow: 1;
`;

const NavBar = () => {
  return (
    <AppBarContainer>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="page 1">
            <LiveTvIcon />
          </IconButton>

         <Search />
        </Toolbar>
      </AppBar>
    </AppBarContainer>
  );
};

export default NavBar;
