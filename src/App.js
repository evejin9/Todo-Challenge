import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState } from "react";
import { useCallback } from "react";
import { MdAddCircleOutline, MdAddCircle  } from "react-icons/md";

import TodoTemplate from "./component/page/TodoTemplate";
import TodoList from "./component/list/TodoList";



const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    background: #FFFFDE;
  }
`;

const AddButton = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: ${props => props.checked && '#7d9c36'};
  };

  &:hover {
    color: #628315;
  }
`;

  const todoListArray = [
    {
      id: 1,
      text: '주민등록등본 출력',
      checked: true
    },
    {
      id: 2,
      text: '과자 사오기',
      checked: false
    },
    {
      id: 3,
      text: '연고 사오기',
      checked: false
    },
  ];

function App() {
  const [todos, setTodos] = useState(todoListArray);

  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ))
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos(todos => todos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        {/* 추가 버튼 */}
        <AddButton><MdAddCircleOutline /></AddButton>
      </TodoTemplate>
      {/* <Button title="추가" /> */}
    </>
  );
}

export default App;