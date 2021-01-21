import { MyPost } from "../interfaces/posts";

export const GET_POSTS_STARTED = "GET_POSTS_STARTED";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";
export const ADD_POST_STARTED = "ADD_POST_STARTED";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const DELETE_POST_STARTED = "DELETE_POST_STARTED";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const ADD_COMMENT_STARTED = "ADD_COMMENT_STARTED";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

interface GetPostsStartedAction {
  type: typeof GET_POSTS_STARTED;
  loading: boolean;
}

interface GetPostsSuccessAction {
  type: typeof GET_POSTS_SUCCESS;
  payload: MyPost;
}

interface GetPostsFailureAction {
  type: typeof GET_POSTS_FAILURE;
  payload: MyPost;
}

interface AddPostStartedAction {
  type: typeof ADD_POST_STARTED;
  loading: boolean;
}

interface AddPostSuccessAction {
  type: typeof ADD_POST_SUCCESS;
  payload: MyPost;
}

interface AddPostFailureAction {
  type: typeof ADD_POST_FAILURE;
  payload: MyPost;
}

interface DeletePostStartedAction {
  type: typeof DELETE_POST_STARTED;
  loading: boolean;
}

interface DeletePostSuccessAction {
  type: typeof DELETE_POST_SUCCESS;
  id: string | number;
}

interface DeletePostFailureAction {
  type: typeof DELETE_POST_FAILURE;
  id: string | number;
  payload: MyPost;
}

interface addCommentStartedAction {
  type: typeof ADD_COMMENT_STARTED;
  loading: boolean;
}

interface addCommentSuccessAction {
  type: typeof ADD_COMMENT_SUCCESS;
  payload: MyPost;
}

interface addCommentFailureAction {
  type: typeof ADD_COMMENT_FAILURE;
  payload: MyPost;
}

export type PostActionTypes =
  | GetPostsStartedAction
  | GetPostsSuccessAction
  | GetPostsFailureAction
  | AddPostStartedAction
  | AddPostSuccessAction
  | AddPostFailureAction
  | DeletePostStartedAction
  | DeletePostSuccessAction
  | DeletePostFailureAction
  | addCommentStartedAction
  | addCommentSuccessAction
  | addCommentFailureAction;
