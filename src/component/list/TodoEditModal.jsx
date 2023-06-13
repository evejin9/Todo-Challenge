import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Button from '../ui/Button';
import { GrFormClose } from "react-icons/gr";

const TodoEditModalWrapper = styled.form`
  width: 100%;
  height: 100%;
  background-color: transparent;
  position: absolute;
  margin: 0 auto;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  `

const ModalArea = styled.div`
  background-color: #fff;
  width: 400px;
  height: 300px;
  padding: 1rem;
  border: 2px solid;
  border-radius: 8px;
  `

const InputArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const EditTextInput = styled.input`
  width: 70%;
  padding: 1rem;
  margin-bottom: 50px;
  border: 1px solid #c5c3c3;
  border-radius: 8px;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;

  svg {
    font-size: 1.5rem;
    color: red;
    cursor: pointer;
    
    &:hover {
      color: #628315;
    }
  };
`

function TodoEditModal(props) {
  const { selectedTodo, showEditModal, setShowEditModal, updateInput, setSelectedTodo } = props;
  // console.log(selectedTodo);

  const [editText, setEditText] = useState(selectedTodo.text);

  console.log(editText);

  const handleEditText = (e) => {
    setEditText(e.target.value);
  };

  const handleSubmit = (e) => { 
    setShowEditModal(false);
    setSelectedTodo(selectedTodo.text = editText);
    e.preventDefault();
  }

  // useEffect(() => {
  //   const targetTodo = todos.find(todo => todo.id === currentId);
  //   setEditText(targetTodo.text);
  // }, []);

  return (
    <TodoEditModalWrapper onSubmit={handleSubmit}> 
      <ModalArea>
        <CloseButton onClick={() => setShowEditModal(!showEditModal)}>
          <GrFormClose />
        </CloseButton>
        <InputArea>
          <EditTextInput 
            type='text'
            value={editText}
            onChange={handleEditText}
          />
          <Button title='수정'
            onClick={() => updateInput}
          />
        </InputArea>
      </ModalArea>
    </TodoEditModalWrapper>
  );
}

export default TodoEditModal;  