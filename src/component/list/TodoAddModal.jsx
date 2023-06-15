import React, { useState } from 'react';
import styled from "styled-components";
import Button from '../ui/Button';

const TodoAddModalWrapper = styled.form`
  margin-top: 30px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 1px solid #e6e6e6; */
`;

const TodoAddInput = styled.input`
  width: 80%;
  padding: 1rem;
  margin-bottom: 30px;
  border: 1px solid #c5c3c3;
  border-radius: 8px;
`;

const AddDateInput = styled.input`
  margin-bottom: 30px ;
  color: #a5a1a1;
  padding: 5px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
`;

function TodoAddModal(props) {
  const { onTodoInput, setShowAddModal, inputDate, setInputDate } = props;
  const [todoAddInput, setTodoAddInput] = useState('');

  const handleTodoInput = (e) => {
    setTodoAddInput(e.target.value);
  }

  const handleSubmit = (e) => {
    onTodoInput(todoAddInput, inputDate);
    setTodoAddInput('');
    setShowAddModal(false);
    setInputDate('');

    e.preventDefault();
  }

  const handleDateInput = (e) => {
    setInputDate(e.target.value);
  }


  return (
    <TodoAddModalWrapper onSubmit={handleSubmit}>
      <TodoAddInput type='text'
        placeholder='할 일을 적어주세요'
        value={todoAddInput}
        onChange={handleTodoInput}
      />

      <AddDateInput 
        type='date'
        value={inputDate}
        onChange={handleDateInput}
      />

      <Button title='추가' 
        onClick={() => onTodoInput} 
        disabled={(todoAddInput === '') || (inputDate === '')  ? true : false} 
        backGroundColor={(todoAddInput === '') || (inputDate === '') ? '#dbdbdb' : '#a5c951'}
      />
    </TodoAddModalWrapper>
  );
}

export default TodoAddModal;