import { Button } from "./components/UI/Button";
import styled from "styled-components";

function App() {
  return (
    <StyledDiv>
      <Button disabled={false} variant={"outlined"}>
        Привет
      </Button>
      <Button disabled={false} variant={"contained"}>
        Привет
      </Button>
      <Button disabled={false} variant={"warning"}>
        Привет
      </Button>
      <Button disabled={false} variant={"danger"}>
        Привет
      </Button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  margin: 50px 0 0 30%;
  display: flex;
  gap: 15px;
`;

export default App;
