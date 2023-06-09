import React from 'react';
import styled from "styled-components";
import TodoListItem from './TodoListItem';
import TodoAddModal from './TodoAddModal';

const TodoListWrapper = styled.div`
  min-height: 400px;
  background-color: #fff;
`;

function TodoList(props) {
  const { todos, onToggle, onRemove, showModal, onTodoInput } = props;

  return (
    <TodoListWrapper>
      {showModal 
        ? (<TodoAddModal onTodoInput={onTodoInput} />)
        : (todos.map((todo) => {
          return (
            <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
          )
        }))
      }
    </TodoListWrapper>
  );
}

export default TodoList;