import React from 'react';
import styled from "styled-components";
import Button from '../ui/Button';

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-bottom: 1px solid #e6e6e6; */
  `;

const TodoAdd = styled.input`
  width: 80%;
  padding: 1rem;
  margin: 10px;
  border: 1px solid #c5c3c3;
  border-radius: 8px;
`;

function TodoAddModal(props) {
  return (
    <Wrapper>
      <TodoAdd />
      <Button title='추가' />
    </Wrapper>
  );
}

export default TodoAddModal;