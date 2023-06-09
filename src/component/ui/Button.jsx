import React from 'react';
import styled from "styled-components";

const ButtonStyle = styled.button`
  background-color: ${props => props.backGroundColor || '#a5c951'};
  padding: 5px 15px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 1px;
  border-radius: 40px;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick, disabled, backGroundColor } = props;

  return (
    <div>
      <ButtonStyle disabled={disabled} backGroundColor={backGroundColor} >{title}</ButtonStyle>
    </div>
  );
}

export default Button;