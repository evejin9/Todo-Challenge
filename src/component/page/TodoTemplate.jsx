import React from 'react';
import styled from "styled-components";
import TodoList from '../list/TodoList';

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 4px;

  .app-title {
    background-color: #fff;
    height: 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #d5d5d5;
  }
`

function TodoTemplate(props) {
  return (
    <Wrapper>
      <div className='app-title'>Todo List</div>
      <TodoList className='content' />
    </Wrapper>
  );
}

export default TodoTemplate;