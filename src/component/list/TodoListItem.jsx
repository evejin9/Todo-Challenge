import React, { useState } from 'react';
import styled from "styled-components";
import { BsCheckCircleFill, BsCheckCircle, BsFillTrashFill, BsPinAngleFill, BsPinAngle, BsFillPencilFill } from "react-icons/bs";

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  `;

const TodoList = styled.div`
  width: 100%;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

const CheckBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  
  svg {
    font-size: 1rem;
    color: ${props => props.checked ? '#8fa758' : props => props.dark ? '#fff' : '#000'};
    &:hover {
      color: ${props => props.checked ? props => props.dark ? '#fff' : '#000' : '#8fa758'};
    }
  };
`;

const D_day = styled.div`
  font-size: 12px;
  color: ${props => props.dark ? '#fff': '#285a3e' };
  font-weight: 800;
`


const PinBox = styled.div`
  color: ${props => props.pin ? '#799141' :'transparent'};
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  svg{
    font-size: 1rem;
  }
  
  &:hover {
    color: ${props => props.dark ? '#fff' : '#073a22'};
  }
  `;

const EditBox = styled.div`
  padding: 1rem 1rem 1rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  svg {
    font-size: 0.9rem;
  }
  
  &:hover {
    color: #8fa758;
  }
  `

  const DeleteBox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
  
    svg {
      font-size: 0.9rem;
    }
  
    &:hover {
      color: #8b1515;
    }
  `;

const Text = styled.div`
  color: ${props => props.checked && '#929292'};
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  font-size: 13px;
  padding: 0.5rem;
  margin-left: 0.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  cursor: pointer;

  .date {
    margin-top: 7px;
    font-size: 9px;
  }
`;

function TodoListItem(props) {
  const { todo, onToggle, onRemove, handlePin, showEditModal, setShowEditModal, handleEditInput, dark } = props;

  const today = new Date();

  const newDay = new Date(todo.date);
  // const newDayMonth = newDay.getMonth();
  // const newDayYear = newDay.getFullYear();
  // const newDayDate = newDay.getDate();


  // console.log(`나는 ${newDayYear}년 ${newDayMonth}월 ${newDayDate}일까지 해야 합니다 `);


  const d_day = newDay.getTime() - today.getTime();

  const result = Math.ceil(d_day / (1000 * 60 * 60 * 24 ));
  console.log(result);
  console.log(`d-day: ${ -1 * result}일 남았습니다.`);

  return (
    <Wrapper>
      <TodoList>
        <CheckBox checked={todo.checked}
          onClick={() => { onToggle(todo.id) }}
          dark={dark}
        >
          {todo.checked ? <BsCheckCircleFill /> : <BsCheckCircle />}
        </CheckBox>
        <Text checked={todo.checked}> 
          <div>
            {todo.text} 
          </div>
          <div className='date'>
            {todo.date}
          </div>
        </Text>
        <D_day dark={dark}>
          {result > 0 ? `D-${result}` : `D+${-1 * result}`}   
        </D_day>
        <PinBox pin={todo.pin}
          onClick={() => { handlePin(todo.id) }}
          dark={dark}
        >
          {todo.pin ? <BsPinAngleFill /> : <BsPinAngle />}
        </PinBox>
        <EditBox 
          onClick={() => {
            setShowEditModal(!showEditModal); 
            handleEditInput(todo.id);
          }}>
          <BsFillPencilFill/>
        </EditBox>
        <DeleteBox onClick={() => {onRemove(todo.id)}}><BsFillTrashFill /></DeleteBox>
      </TodoList>
    </Wrapper>
  );
}

// export default TodoListItem;
export default React.memo(TodoListItem);