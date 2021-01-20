import React from "react";

export interface MyPost {
  id: string | number;
  title: string;
  body: string;
  error: any;
}

export interface PostsState {
  posts: MyPost[];
  loading: boolean;
  error: any;
}

export interface ButtonType {
  onClick: () => void;
  text?: string;
}

export interface LayoutType {
  children: React.ReactNode;
  title: string | number;
}
