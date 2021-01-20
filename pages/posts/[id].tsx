import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { PostsState } from "interfaces/posts";
import { PostTitle, Wrapper, PostWithBorder } from "../../styles/styles";
import { fetchPosts } from "../../redux/actions/postAction";
import Layout from "../../components/Layout";
import Button from "../../components/Button";

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

export default Post;
