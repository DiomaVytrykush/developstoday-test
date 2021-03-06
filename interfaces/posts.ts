import React from "react";

export interface MyPost {
  id: string | number;
  title: string;
  body: string;
  error: string;
}

export interface MyComment {
  id: string | number;
  body: string;
  comment: string;
  error: string;
}

export interface PostsState {
  posts: MyPost[];
  comments: MyComment[];
  loading: boolean;
  error: string;
}

export interface ButtonType {
  onClick: () => void;
  text?: string;
}

export interface LayoutType {
  children: React.ReactNode;
  title: string | number;
}

export interface ModalType {
  openModal: boolean;
  setopenModal: (e) => void;
  error: string;
}
