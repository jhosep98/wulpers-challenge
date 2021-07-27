import { useState } from "react";
import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import { SearchContext } from "./context/SearchContext";

const AppContainer = styled.div`
  width: 320px;
  height: 640px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <CssBaseline />
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <AppContainer>
          <NavBar />
          <MainContainer />
        </AppContainer>
      </SearchContext.Provider>
    </>
  );
}

export default App;
