import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { addPost } from "../../../redux/actions/postAction";
import Button from "../../../components/Button";
import Layout from "../../../components/Layout";

const newPost = () => {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [error, setError] = React.useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const createPost = () => {
    if (title === "" || body === "") {
      setError(true);
    } else {
      dispatch(addPost(title, body));
      router.push("/");
    }
  };

  return (
    <Layout title="New Post">
      <Wrapper>
        <Title>Create your own post</Title>
        <Label>Title</Label>
        <Input
          value={title}
          placeholder="Write your title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Label>Body</Label>
        <Input
          value={body}
          placeholder="Write your body"
          onChange={(e) => setBody(e.target.value)}
        />
        {error && <ErrorMassage>All fiels are required !</ErrorMassage>}
        <Button onClick={createPost} />
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ce82ff;
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 80px;
  text-align: center;
  margin: 0 0 100px;
`;

const Input = styled.input`
  outline: none;
  width: 300px;
  border: 3px solid #ff9600;
  padding: 15px 25px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: white;
  font-size: 30px;
`;

const ErrorMassage = styled.div`
  color: red;
`;

export default newPost;
