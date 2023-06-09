import React from 'react';
import styled from "styled-components";
import { BsCheckCircleFill, BsCheckCircle, BsFillTrashFill  } from "react-icons/bs";

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
    color: ${props => props.checked ? '#000' : '#8fa758'};
    &:hover {
      color: ${props => props.checked ? '#7d9c36' : '#000'};
    }
  };
`;

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
  color: ${props => props.checked ? '#000' : '#929292'};
  text-decoration: ${props => props.checked ? 'none' : 'line-through'};
  font-size: 13px;
  padding: 0.5rem;
  margin-left: 0.5rem;
  flex: 1;
`;

function TodoListItem(props) {
  const { todo, onToggle, onRemove } = props;

  return (
    <Wrapper>
      <TodoList>
        <CheckBox checked={todo.checked}
          onClick={() => { onToggle(todo.id) }}
        >
          {todo.checked ? <BsCheckCircle />:<BsCheckCircleFill />}
        </CheckBox>
        <Text checked={todo.checked}>{todo.text}</Text>
        <DeleteBox onClick={() => {onRemove(todo.id)}}><BsFillTrashFill /></DeleteBox>
      </TodoList>
    </Wrapper>
  );
}

export default TodoListItem;