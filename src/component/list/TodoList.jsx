import React from 'react';
import styled from "styled-components";
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 400px;
  background-color: #fff;
`;

function TodoList(props) {
  const { todos, onToggle, onRemove } = props;

  return (
    <TodoListWrapper>
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        )})
      }
    </TodoListWrapper>
  );
}

export default TodoList;