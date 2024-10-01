import { useState } from "react";
import { Button } from "../UI/Button";
import styled from "styled-components";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function Increment() {
    setCount(count + 1);
  }

  const Decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <StyledDiv>
      <h1>{count}</h1>
      <Button onClick={Increment}>Increment</Button>
      <Button onClick={Decrement}>Decrement</Button>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 100px;
  margin: 0 0 0 35%;
  background-color: #3232d387;
  width: 400px;
  height: 400px;
  & > h1 {
    margin: 20px 0 20px 85px;
  }
`;
