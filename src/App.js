import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useState } from "react";
import { useCallback } from "react";
import { IoIosAddCircleOutline, IoIosCloseCircle  } from "react-icons/io";

import TodoTemplate from "./component/page/TodoTemplate";
import TodoList from "./component/list/TodoList";
import TodoAddModal from "./component/list/TodoAddModal";



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

const Text = styled.div`
  padding: 1rem;
  font-size: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const todoListArray = [
  {
    id: 1,
    text: '주민등록등본 출력',
    checked: false,
    pin: false,
  },
  {
    id: 2,
    text: '과자 사오기',
    checked: true,
    pin: false,
  },
  {
    id: 3,
    text: '연고 사오기',
    checked: false,
    pin: false,
  },
];


function App() {
  const [todos, setTodos] = useState(todoListArray);
  const [showModal, setShowModal] = useState(false);

  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ))
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos(todos => todos.filter((todo) => todo.id !== id));
  }, []);

  const doingArray = todos.filter((todo) => todo.checked === false);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} showModal={showModal} />
        {/* 추가 버튼 */}
        <AddButton onClick={() => {
          setShowModal(!showModal);
        }}>
          {showModal ? <IoIosCloseCircle /> : <IoIosAddCircleOutline />}
        </AddButton>
        <Text>현재 해야 할 일이 {doingArray.length}개 남았네요!</Text>
      </TodoTemplate>
    </>
  );
}

export default App;