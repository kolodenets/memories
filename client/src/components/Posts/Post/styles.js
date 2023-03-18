import { styled } from '@mui/material/styles';

import {
  Card,
  CardActions,
  CardMedia,
  Typography,
} from '@mui/material';

export const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
});

export const StyledOverlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

export const StyledOverlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

export const StyledDetails = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

export const StyledTypography = styled(Typography)({
  padding: '0 16px',
});

export const StyledCardActions = styled(CardActions)({
  padding: '0 16px 8px 16px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
});
