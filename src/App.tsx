import styled from "styled-components";
import NavBar from "./components/NavBar";

const AppContainer = styled.div`
  width: 320px;
  height: 640px;
  background-color: #F9F9F9;
`;

function App() {
  return (
    <AppContainer>
      <NavBar />
    </AppContainer>
  );
}

export default App;
