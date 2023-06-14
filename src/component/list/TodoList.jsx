import React from 'react';
import styled from "styled-components";
import TodoListItem from './TodoListItem';
import TodoAddModal from './TodoAddModal';

const TodoListWrapper = styled.div`
  min-height: 400px;
  background-color: ${props => props.dark ? '#000': '#fff'};
  color: ${props => props.dark ? '#fff': '#000'};
`;

function TodoList(props) {
  const { todos, onToggle, onRemove, showAddModal, setShowAddModal, onTodoInput, handlePin, showEditModal, setShowEditModal, handleEditInput, dark } = props;

  return (
    <TodoListWrapper dark={dark}>
      {showAddModal 
        ? (<TodoAddModal onTodoInput={onTodoInput} setShowAddModal={setShowAddModal} />)
        : (
          <>
            <div>
              {todos.filter((todo => todo.pin === true && todo.checked === false)).map((todo) => {
                return (
                  <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} showEditModal={showEditModal} setShowEditModal={setShowEditModal} handleEditInput={handleEditInput} dark={dark} />
                )
              })}
            </div>
            <div>
              {todos.filter((todo => todo.pin === false && todo.checked === false)).map((todo) => {
                return (
                <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} showEditModal={showEditModal} setShowEditModal={setShowEditModal} handleEditInput={handleEditInput} dark={dark} />
                )
              })}
            </div>
            <div>
              {todos.filter((todo => todo.checked === true)).map((todo) => {
                return (
                <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} showEditModal={showEditModal} setShowEditModal={setShowEditModal} handleEditInput={handleEditInput} dark={dark} />
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