import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../ui/Button';

const TodoAddModalWrapper = styled.form`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 1px solid #e6e6e6; */
  `;

const TodoAddInput = styled.input`
  width: 80%;
  padding: 1rem;
  margin: 10px;
  border: 1px solid #c5c3c3;
  border-radius: 8px;
  `;

function TodoAddModal(props) {
  const { onTodoInput } = props;
  const [todoAddInput, setTodoAddInput] = useState('');
  
  const handleTodoInput = (e) => {
    setTodoAddInput(e.target.value);
  }

  const handleSubmit = (e) => {
    onTodoInput(todoAddInput);
    setTodoAddInput('');

    e.preventDefault();
  }


  return (
    <TodoAddModalWrapper onSubmit={handleSubmit}>
      <TodoAddInput type='text'
        placeholder='할 일을 적어주세요'
        value={todoAddInput}
        onChange={handleTodoInput}/>
      <Button title='추가' 
        onClick={() => onTodoInput} 
        disabled={todoAddInput === '' ? true : false} 
        backGroundColor={todoAddInput === '' ? '#dbdbdb' : '#a5c951'}
      />
    </TodoAddModalWrapper>
  );
}

export default TodoAddModal;