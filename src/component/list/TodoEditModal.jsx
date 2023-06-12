import React from 'react';
import styled from "styled-components";

const TodoEditModalWrapper = styled.form`
  background-color: #fff;
  width: 450px;
  height: 400px;
  padding: 1rem;
  border: 2px solid;
  border-radius: 8px;
  position: absolute;
  margin: 0 auto;
  top: 0;
  /* left: 0; */
  right: 0;
  /* bottom: 0; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const EditTextInput = styled.input`
  width: 70%;
  padding: 1rem;
  margin: 10px;
  border: 1px solid #c5c3c3;
  border-radius: 8px;
`;

function TodoEditModal(props) {
  return (
    <TodoEditModalWrapper>
      <EditTextInput
        placeholder='할일을 입력하시오' />
    </TodoEditModalWrapper>
  );
}

export default TodoEditModal;  