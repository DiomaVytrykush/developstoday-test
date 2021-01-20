import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addPost } from "../../../redux/actions/postAction";
import {
  Wrapper,
  Title,
  Label,
  Input,
  ErrorMassage,
} from "../../../styles/styles";
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

export default newPost;
