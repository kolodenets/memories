/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-unused-expressions */

import { createSlice } from '@reduxjs/toolkit';
import { fetchPosts, createPost } from '../actions';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log('before ', state);
      state = action.payload;
      console.log('after ', state);
    });
    builder.addCase(createPost.fulfilled, (state, action) => state = [...state, action.payload]);
  },
});

export default postsSlice.reducer;
