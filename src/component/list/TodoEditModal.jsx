import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Button from '../ui/Button';
import { IoIosClose } from "react-icons/io";

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
  background-color: ${props => props.dark ? '#000':'#fff'};
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
  margin-bottom: 30px;
  border: 1px solid #c5c3c3;
  border-radius: 8px;
`;

const CloseButton = styled.div`
  color: ${props => props.dark ? '#fff': '#000'};
  display: flex;
  justify-content: flex-end;
  
  svg {
    font-size: 1.8rem;
    cursor: pointer;
    
  };

  &:hover {
    color: #799141;
  }
`

const EditDateInput = styled.input`
  margin-bottom: 30px ;
  color: #a5a1a1;
  padding: 5px 10px;
  border: 1px solid #d5d5d5;
  border-radius: 8px;
`;

function TodoEditModal(props) {
  const { selectedTodo, showEditModal, setShowEditModal, setSelectedTodo, dark } = props;

  const [editText, setEditText] = useState(selectedTodo.text);
  const [editDate, setEditDate] = useState(selectedTodo.date);

  console.log(editDate);

  const handleEditText = (e) => {
    setEditText(e.target.value);
  };

  const handleSubmit = (e) => { 
    setShowEditModal(false);
    setSelectedTodo(selectedTodo.text = editText);
    setSelectedTodo(selectedTodo.date = editDate);
    e.preventDefault();
  }

  const handleDateInput = (e) => {
    setEditDate(e.target.value);
  }

  // 투두의 id값을 저장했을 경우
  // useEffect(() => {
  //   const targetTodo = todos.find(todo => todo.id === currentId);
  //   setEditText(targetTodo.text);
  // }, []);

  return (
    <TodoEditModalWrapper onSubmit={handleSubmit}> 
      <ModalArea dark={dark}>
        <CloseButton onClick={() => setShowEditModal(!showEditModal)} 
          dark={dark}
        >
          <IoIosClose />
        </CloseButton>
        <InputArea>
          <EditTextInput 
            type='text'
            value={editText}
            onChange={handleEditText}
          />
          <EditDateInput 
            type='date'
            value={editDate}
            onChange={handleDateInput}
          />
          <Button title='수정'
            disabled={editText === selectedTodo.text && editDate === selectedTodo.date ? true : false}
            backGroundColor={ editText === selectedTodo.text && editDate === selectedTodo.date ? '#dbdbdb' : '#a5c951'}
          />
        </InputArea>
      </ModalArea>
    </TodoEditModalWrapper>
  );
}

export default TodoEditModal;  