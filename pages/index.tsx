import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchPosts, deletePost } from "../redux/actions/postAction";
import { PostsState } from "../interfaces/posts";
import Button from "../components/Button";
import Layout from "../components/Layout";
import {
  Container,
  Post,
  PostContent,
  PostTitle,
  PostCircle,
  ButtonWrapper,
  DeleteButton,
} from "../styles/styles";

const Posts = () => {
  const { posts, loading } = useSelector((state: PostsState) => state.posts);

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

export default Posts;
