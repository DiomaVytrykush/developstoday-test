import React from "react";
import { NewButton } from "../styles/styles";
import { ButtonType } from "../interfaces/posts";

const Button = ({ onClick, text = "Create a post" }: ButtonType) => {
  return <NewButton onClick={onClick}>{text}</NewButton>;
};

export default Button;
