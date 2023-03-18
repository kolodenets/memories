/* eslint-disable no-underscore-dangle */
import React from 'react';
import {
  CardContent,
  Button,
  Typography,
} from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';

import moment from 'moment/moment';
import {
  StyledCardActions,
  StyledCardMedia,
  StyledDetails,
  StyledOverlay,
  StyledOverlay2,
  StyledTypography,
  StyledCard,
} from './styles';

function Post({ post, setCurrentId }) {
  return (
    <StyledCard>
      <StyledCardMedia image={post.selectedFile} title={post.title} />
      <StyledOverlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </StyledOverlay>
      <StyledOverlay2>
        <Button
          style={{ color: 'white' }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHoriz fontSize="medium" />
        </Button>
      </StyledOverlay2>
      <StyledDetails>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </StyledDetails>
      <StyledTypography variant="h5" gutterBottom>
        {post.title}
      </StyledTypography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAlt fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <Delete fontSize="small" />
          Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
}

export default Post;
