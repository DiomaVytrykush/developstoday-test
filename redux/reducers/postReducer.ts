import * as types from "../types";
import { PostActionTypes } from "../types";
import { PostsState } from "../../interfaces/posts";

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const postReducer = (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case types.GET_POSTS_STARTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
        loading: false,
      };
    case types.GET_POSTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case types.ADD_POST_STARTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case types.ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case types.DELETE_POST_STARTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.posts.filter((item) => item.id !== action.id),
      };
    case types.DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      case types.ADD_COMMENT_STARTED:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        // posts: ,
      };
    case types.ADD_COMMENT_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};
