import React from 'react';
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: #b7e055;
  padding: 5px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick } = props;

  return (
    <div>
      <ButtonStyle width>{title}</ButtonStyle>
    </div>
  );
}

export default Button;