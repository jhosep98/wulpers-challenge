import styled from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";

const AppContainer = styled.div`
  width: 320px;
  height: 640px;
  background-color: #f9f9f9;
`;

function App() {
  return (
    <>
      <CssBaseline />
      <AppContainer>
        <NavBar />
        <MainContainer />
      </AppContainer>
    </>
  );
}

export default App;
