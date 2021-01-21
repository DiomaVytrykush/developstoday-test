import React from "react";
import styled from "styled-components";
import { ButtonType } from "../interfaces/posts";

const Button = ({ onClick, text = "Create a post" }: ButtonType) => {
  return <NewButton onClick={onClick}>{text}</NewButton>;
};

const NewButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: rgb(28, 176, 246);
  box-shadow: rgb(19, 158, 224) 0px -4px 0px 0px inset;
  border-radius: 10px;
  padding: 10px 24px 11px;
  width: auto;
  color: white;
  text-transform: uppercase;
  margin: 40px auto ;
  font-size: 16px;
  outline: none;
`;

export default Button;
