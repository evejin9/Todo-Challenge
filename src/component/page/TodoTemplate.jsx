import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #fff;
  width: 500px;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 3px;
  border: 2px solid;

  .app-title {
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #d5d5d5;
  }
`;

function TodoTemplate(props) {
  return (
    <Wrapper>
      <div className='app-title'>Todo List ✔️</div>
      {props.children}
    </Wrapper>
  );
}

export default TodoTemplate;