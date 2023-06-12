import React from 'react';
import styled from "styled-components";
import TodoListItem from './TodoListItem';
import TodoAddModal from './TodoAddModal';

const TodoListWrapper = styled.div`
  min-height: 400px;
  background-color: #fff;
`;

function TodoList(props) {
  const { todos, onToggle, onRemove, showModal, setShowModal, onTodoInput, handlePin } = props;

  return (
    <TodoListWrapper>
      {showModal 
        ? (<TodoAddModal onTodoInput={onTodoInput} setShowModal={setShowModal} />)
        : (
          <>
            <div>
              {todos.filter((todo => todo.pin === true && todo.checked === false)).map((todo) => {
                return (
                  <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} />
                )
              })}
            </div>
            <div>
              {todos.filter((todo => todo.pin === false && todo.checked === false)).map((todo) => {
                return (
                <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} />
                )
              })}
            </div>
            <div>
              {todos.filter((todo => todo.checked === true)).map((todo) => {
                return (
                <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} />
                )
              })}
            </div>
          </>
          )
      }
    </TodoListWrapper>
  );
}

export default TodoList;