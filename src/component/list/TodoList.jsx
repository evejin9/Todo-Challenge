import React from 'react';
import TodoListItem from './TodoListItem';
import styled from "styled-components";

const TodoListWrapper = styled.div`
  min-height: 400px;
  background-color: #fff;
`;

function TodoList(props) {
  return (
    <TodoListWrapper>
      <TodoListItem />
    </TodoListWrapper>
  );
}

export default TodoList;