/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';
// import DeleteIcon from '@mui/icons-material';
// import MoreHoriz from '@mui/icons-material';
import moment from 'moment/moment';

function Post({ post, setCurrentId }) {
  console.log('in post ', post);
  return (
    <Card>
      <CardMedia image={post.selectedFile} title={post.title} />
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="medium" />
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography variant="h5" gutterBottom>
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAlt fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
