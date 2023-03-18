/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api/index';

export const fetchPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const { data } = await api.fetchPosts();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createPost = createAsyncThunk('posts/createPost', async (post) => {
  try {
    const { data } = await api.createPost(post);

    return data;
  } catch (error) {
    console.log(error);
  }
});
