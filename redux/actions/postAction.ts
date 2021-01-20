import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import * as types from "../types";
import { PostsState } from "../../interfaces/posts";

const actionStarted = (type) => ({
  type,
});

const actionSuccess = (res, type) => ({
  type,
  payload: res,
});

const actionFailure = (error, type) => ({
  type,
  payload: {
    error,
  },
});

const patternFunc = (
  startedType,
  successType,
  failireType,
  method,
  url,
  params
): ThunkAction<void, PostsState, unknown, Action<string>> => {
  return (dispatch) => {
    dispatch(actionStarted(startedType));

    axios({ method, url, data: params })
      .then((res) => {
        dispatch(actionSuccess(res.data, successType));
      })
      .catch((err) => {
        dispatch(actionFailure(err.message, failireType));
      });
  };
};

export const fetchPosts = () => {
  return patternFunc(
    types.GET_POSTS_STARTED,
    types.GET_POSTS_SUCCESS,
    types.GET_POSTS_FAILURE,
    "get",
    "https://simple-blog-api.crew.red/posts/",
    null
  );
};

export const addPost = (title, body) => {
  return patternFunc(
    types.ADD_POST_STARTED,
    types.ADD_POST_SUCCESS,
    types.ADD_POST_FAILURE,
    "post",
    "https://simple-blog-api.crew.red/posts/",
    {
      title,
      body,
    }
  );
};

export const deletePost = (id) => {
  return patternFunc(
    types.DELETE_POST_STARTED,
    types.DELETE_POST_SUCCESS,
    types.DELETE_POST_FAILURE,
    "delete",
    `https://simple-blog-api.crew.red/posts/${id}`,
    null
  );
};
