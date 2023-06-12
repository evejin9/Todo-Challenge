import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useRef, useState } from "react";
import { useCallback } from "react";
import { IoIosAddCircleOutline, IoIosCloseCircle  } from "react-icons/io";
import { BsSortDown, BsSortUp } from "react-icons/bs";

import TodoTemplate from "./component/page/TodoTemplate";
import TodoList from "./component/list/TodoList";
import TodoEditModal from "./component/list/TodoEditModal";


// 스타일
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    background: #FFFFDE;
    position: relative;
  }
`;

const SortButton = styled.div`
  padding: 10px 14px 10px;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  svg {
    font-size: 1rem;
    color: ${props => props.checked && '#7d9c36'};
  };

  &:hover {
    color: #628315;
  }
`;

const AddButton = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.checked && '#7d9c36'};
    cursor: pointer;
    
    &:hover {
      color: #628315;
    }
  };
`;

const Text = styled.div`
  padding: 1rem;
  font-size: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

// todo 배열
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
  const [showAddModal, setShowAddModal] = useState(false);
  const [handleSortButton, setHandleSortButton] = useState(false);

  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ))
  }, []);

  const handlePin = useCallback((id) => {
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, pin: !todo.pin } : todo
    ))
  }, []);

  const handleRemove = useCallback((id) => {
    setTodos(todos => todos.filter((todo) => todo.id !== id));
  }, []);

  const doingArray = todos.filter((todo) => todo.checked === false);
  const doneArray = todos.filter((todo) => todo.checked === true);

  const nextId = useRef(todos.length);

  const handleTodoInput = useCallback((text) => {
    const todo = {
      id: nextId.current + 1,
      text,
      checked: false,
      pin: false,
    };

    console.log(todo.id);
    setTodos(todos => todos.concat(todo));

    nextId.current += 1;
  })

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Header>
          <Text>할 일 {todos.length}개</Text>
          <SortButton onClick={() => {
            setHandleSortButton(!handleSortButton);
            if (handleSortButton){
              setTodos(todos.sort((a, b) => {
                if (a.text > b.text) return -1;
                return 0;
              }))
            } else {
              setTodos(todos.sort((a, b) => {
                if (a.text < b.text) return -1;
                return 0;
              }))
            }
          }}>
            {handleSortButton ? <BsSortDown /> : <BsSortUp />}
          </SortButton>
        </Header>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} showAddModal={showAddModal} setShowAddModal={setShowAddModal} onTodoInput={handleTodoInput} handlePin={handlePin}  />
        {/* 추가 버튼 */}
        <AddButton onClick={() => {
          setShowAddModal(!showAddModal);
        }}>
          {showAddModal ? <IoIosCloseCircle /> : <IoIosAddCircleOutline />}
        </AddButton>
        <Text> 완료: {doneArray.length}개, 미완료: {doingArray.length}개</Text>
      </TodoTemplate>
      <TodoEditModal />
    </>
  );
}

export default App;