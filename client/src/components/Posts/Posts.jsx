/* eslint-disable no-underscore-dangle */
import React from 'react';
import { CircularProgress, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import Post from './Post/Post';

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      Posts
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Posts;
