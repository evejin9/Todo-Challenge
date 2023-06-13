import React from 'react';
import styled from "styled-components";
import TodoListItem from './TodoListItem';
import TodoAddModal from './TodoAddModal';

const TodoListWrapper = styled.div`
  min-height: 400px;
  background-color: #fff;
`;

function TodoList(props) {
  const { todos, onToggle, onRemove, showAddModal, setShowAddModal, onTodoInput, handlePin, showEditModal, setShowEditModal, handleEditInput } = props;

  return (
    <TodoListWrapper>
      {showAddModal 
        ? (<TodoAddModal onTodoInput={onTodoInput} setShowAddModal={setShowAddModal} />)
        : (
          <>
            <div>
              {todos.filter((todo => todo.pin === true && todo.checked === false)).map((todo) => {
                return (
                  <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} showEditModal={showEditModal} setShowEditModal={setShowEditModal} handleEditInput={handleEditInput} />
                )
              })}
            </div>
            <div>
              {todos.filter((todo => todo.pin === false && todo.checked === false)).map((todo) => {
                return (
                <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} showEditModal={showEditModal} setShowEditModal={setShowEditModal} handleEditInput={handleEditInput} />
                )
              })}
            </div>
            <div>
              {todos.filter((todo => todo.checked === true)).map((todo) => {
                return (
                <TodoListItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} handlePin={handlePin} showEditModal={showEditModal} setShowEditModal={setShowEditModal} handleEditInput={handleEditInput} />
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