import React from "react";

import TodoList from "./todos/Todolist";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 3rem;
  font-family: Arial, Helvetica, sans-serif;
`;
import { hot } from "react-hot-loader";
const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default hot(module)(App);
