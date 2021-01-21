import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { PostsState } from "interfaces/posts";
import styled from "styled-components";
import { fetchPosts } from "../../redux/actions/postAction";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { theme } from '../_app';

const Post = () => {
  const { posts, loading } = useSelector((state: PostsState) => state.posts);

  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, []);

  const post = posts.find((elem) => elem.id == router.query.id);

  return (
    <Layout title="Post">
      <Wrapper>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <PostWithBorder>
            <PostTitle>{post.title}</PostTitle>
            <h1>{post.body}</h1>
            <Button onClick={() => router.push("/")} text="Go back" />
          </PostWithBorder>
        )}
      </Wrapper>
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

export default Post;
