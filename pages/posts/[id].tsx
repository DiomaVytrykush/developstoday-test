import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { PostsState } from "interfaces/posts";
import styled from "styled-components";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { theme } from "../_app";
import Loader from "../../components/Loader";
import NewModal from "components/Modal";
import {
  addComment,
  fetchComments,
  fetchPosts,
} from "../../redux/actions/postAction";

const Post = () => {
  const [body, setBody] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState(false);
  const [openModal, setopenModal] = React.useState(false);

  const { posts, loading, comments, error } = useSelector(
    (state: PostsState) => state.posts
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const post = posts.find((elem) => elem.id == router.query.id);

  const createComment = () => {
    if (body === "") {
      setErrorMessage(true);
    } else {
      dispatch(addComment(router.query.id, body));
      setBody("");
    }
  };

  React.useEffect(() => {
    dispatch(fetchComments(router.query.id));
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [posts]);

  React.useEffect(() => {
    if (error !== null) {
      setopenModal(true);
    } else {
      setopenModal(false);
    }
  }, [error]);

  return (
    <Layout title="Post">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Wrapper>
            <PostWithBorder>
              <PostTitle>{post && post.title}</PostTitle>
              <h2>{post && post.body}</h2>
              <Button onClick={() => router.push("/")} text="Go back" />
            </PostWithBorder>
          </Wrapper>
          <CommentsWrapper>
            <CommentTitle>Write your comment here !</CommentTitle>
            {comments &&
              comments.map((i) => <Comment key={i.id}>{i.body}</Comment>)}
            <Input
              value={body}
              placeholder="Write your comment"
              onChange={(e) => setBody(e.target.value)}
            />
            {errorMessage && <h3>Comment is required !</h3>}
            <Button onClick={createComment} text="Add comment" />
          </CommentsWrapper>
          <NewModal
            openModal={openModal}
            setopenModal={setopenModal}
            error={error}
          />
        </>
      )}
    </Layout>
  );
};

const PostWithBorder = styled.div`
  border: 3px solid ${theme.colors.primary};
  border-radius: 15px;
  padding: 60px;
  margin: 0 40px;
  background-color: white;
`;

const PostTitle = styled.h3`
  opacity: 0.8;
  font-size: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.colors.secondary};
  height: 100vh;
  text-align: center;
  justify-content: center;
`;

const CommentTitle = styled.h1`
  color: white;
  font-size: 60px;
  text-align: center;
  margin: 50px 0;
`;

const CommentsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${theme.colors.primary};
  min-height: 100vh;
  text-align: center;
  justify-content: center;
`;

const Comment = styled.div`
  width: 100%;
  color: white;
  border-bottom: 2px solid white;
  padding: 20px;
`;

const Input = styled.input`
  outline: none;
  width: 300px;
  border: 3px solid ${theme.colors.secondary};
  margin: 50px 0 0 0;
  padding: 15px 25px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export default Post;
