import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Post = styled.a`
  position: relative;
  overflow: hidden;
  background-color: #ff9600;
  width: calc(30% + 10px);
  margin: 0 9px 18px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
`;

export const PostContent = styled.div`
  padding: 20px 20px 100px;
  text-align: center;
  height: 300px;
  overflow: scroll;
`;

export const PostTitle = styled.h3`
  opacity: 0.8;
  font-size: 14px;
`;

export const PostCircle = styled.div`
  position: absolute;
  bottom: -15%;
  left: 75%;
  width: 150px;
  height: 150px;
  background-color: #ce82ff;
  border-radius: 50%;
`;

export const PostWithBorder = styled.div`
  border: 3px solid #ff9600;
  border-radius: 15px;
  padding: 60px;
  margin: 0 40px;
  background-color: white;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  outline: none;
  width: 300px;
  border: 3px solid #ff9600;
  padding: 15px 25px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ce82ff;
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

export const Label = styled.label`
  color: white;
  font-size: 30px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 80px;
  text-align: center;
  margin: 0 0 100px;
`;

export const NewButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: #1cb0f6;
  box-shadow: 0 -4px 0 0 #139ee0 inset;
  border-radius: 10px;
  padding: 10px 24px 11px;
  width: auto;
  color: white;
  text-transform: uppercase;
  margin: 40px;
  font-size: 16px;
  outline: none;
`;

export const DeleteButton = styled.button`
  top: 5px;
  right: 5px;
  border: 2px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  color: white;
  font-size: 14px;
  cursor: pointer;
  background: none;
  outline: none;

  &:hover {
    border-color: #ce82ff;
    color: #ce82ff;
  }
`;

export const ErrorMassage = styled.div`
  color: red;
`;
