import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { fetchPosts, deletePost } from "../redux/actions/postAction";
import { PostsState } from "../interfaces/posts";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Posts = () => {
  const { posts, loading, error } = useSelector(
    (state: PostsState) => state.posts
  );
  console.log(error);
  const dispatch = useDispatch();
  const router = useRouter();

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const removePost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(deletePost(e));
  };

  return (
    <Layout title="Posts Page">
      <Container>
        {error}
        {loading ? (
          <h1>Loading...</h1>
        ) : posts.length ? (
          posts.map((item) => (
            <Link key={item.id} href={`/posts/${item.id}`}>
              <Post>
                <PostContent>
                  <PostTitle>{item.title}</PostTitle>
                  <h1>{item.body}</h1>
                </PostContent>
                <DeleteButton onClick={(e) => removePost(e)}>✖</DeleteButton>
                <PostCircle />
              </Post>
            </Link>
          ))
        ) : (
          <h1>There are no posts yet</h1>
        )}
      </Container>
      <ButtonWrapper>
        <Button onClick={() => router.push("/posts/new")} />
      </ButtonWrapper>
    </Layout>
  );
};

const Container = styled.div`
  margin: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Post = styled.a`
  position: relative;
  overflow: hidden;
  background-color: #ff9600;
  width: calc(30% + 10px);
  margin: 0 9px 18px;
  border-radius: 15px;
  color: white;
  cursor: pointer;
`;

const PostContent = styled.div`
  padding: 20px 20px 100px;
  text-align: center;
  height: 300px;
  overflow: scroll;
`;

const PostTitle = styled.h3`
  opacity: 0.8;
  font-size: 14px;
`;

const PostCircle = styled.div`
  position: absolute;
  bottom: -15%;
  left: 75%;
  width: 150px;
  height: 150px;
  background-color: #ce82ff;
  border-radius: 50%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DeleteButton = styled.button`
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

export default Posts;
