import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import * as types from "../types";
import { PostsState } from "../../interfaces/posts";

export const fetchPosts = (): ThunkAction<
  void,
  PostsState,
  unknown,
  Action<string>
> => async (dispatch) => {
  const res = await axios.get("https://simple-blog-api.crew.red/posts");
  dispatch({
    type: types.GET_POSTS,
    payload: res.data,
  });
};

export const addPost = (
  title: string,
  body: string
): ThunkAction<void, PostsState, unknown, Action<string>> => async (
  dispatch
) => {
  const res = await axios.post("https://simple-blog-api.crew.red/posts", {
    title,
    body,
  });
  dispatch({
    type: types.ADD_POST,
    payload: res.data,
  });
};