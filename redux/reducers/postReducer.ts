import * as types from "../types";
import { PostActionTypes } from "../types";
import { PostsState } from "../../interfaces/posts";

const initialState: PostsState = {
  posts: [],
  loading: true,
};

export const postReducer = (state = initialState, action: PostActionTypes) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case types.ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    default:
      return state;
  }
};
