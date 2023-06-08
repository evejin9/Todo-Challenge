import React from 'react';
import styled from "styled-components";
import { BsCheckCircleFill, BsCheckCircle  } from "react-icons/bs";

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d5d5d5;
  `;

const TodoList = styled.div`  
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
    font-size: 1.2rem;
    color: ${props => props.checked && '#9fc93c'};
  }
`;

const Text = styled.div`
  padding: 0.5rem;
  margin-left: 0.5rem;
  flex: 1;
`;

function TodoListItem(props) {
  return (
    <Wrapper>
      <TodoList>
        <CheckBox><BsCheckCircle /></CheckBox>
        <Text>ㅎㅇ</Text>
      </TodoList>
    </Wrapper>
  );
}

export default TodoListItem;