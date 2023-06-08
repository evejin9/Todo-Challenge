import React from 'react';
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: #9fc93c;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: 700;
  border: 1px;
  border-radius: 10px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;

  return (
    <div>
      <ButtonStyle>{title}</ButtonStyle>
    </div>
  );
}

export default Button;