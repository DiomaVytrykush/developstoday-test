import { MyPost } from "../interfaces/posts";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";

interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: MyPost;
}

interface AddPostAction {
  type: typeof ADD_POST;
  payload: MyPost;
}

interface DeletePostAction {
  type: typeof DELETE_POST;
  id: string | number;
}

export type PostActionTypes = GetPostsAction | AddPostAction | DeletePostAction;
