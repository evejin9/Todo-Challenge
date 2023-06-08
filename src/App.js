import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import TodoTemplate from "./component/page/TodoTemplate";
import Button from "./component/ui/Button";

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: #FFFFDE;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate />
      <Button title="추가" />
    </>
  );
}

export default App;