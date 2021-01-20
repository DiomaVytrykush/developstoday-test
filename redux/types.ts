import { MyPost } from "../interfaces/posts";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: MyPost;
}

interface AddPostAction {
  type: typeof ADD_POST;
  payload: MyPost;
}

export type PostActionTypes = GetPostsAction | AddPostAction;
