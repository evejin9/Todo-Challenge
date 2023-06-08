import React from 'react';
import styled from "styled-components";
import TodoList from '../list/TodoList';
import { MdAddCircleOutline, MdAddCircle  } from "react-icons/md";

const Wrapper = styled.div`
  background-color: #fff;
  width: 500px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 3px;
  border: 2px solid;

  .app-title {
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #d5d5d5;
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
`;

function TodoTemplate(props) {
  return (
    <Wrapper>
      <div className='app-title'>Todo List</div>
      <TodoList className='content' />
      <AddButton><MdAddCircleOutline /></AddButton>
    </Wrapper>
  );
}

export default TodoTemplate;