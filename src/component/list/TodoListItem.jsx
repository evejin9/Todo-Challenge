import React from 'react';
import styled from "styled-components";
import { BsCheckCircleFill, BsCheckCircle  } from "react-icons/bs";

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  border-radius: 4px;
  `;

const TodoItem = styled.div`  
  background-color: #fff;
  height: 40px;
  font-size: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CheckBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    font-size: 1.5rem;
    color: ${props => props.checked && '#9fc93c'};
  }
`;


function TodoListItem(props) {
  return (
    <Wrapper>
      <TodoItem>
        <CheckBox></CheckBox>
      </TodoItem>
    </Wrapper>
  );
}

export default TodoListItem;