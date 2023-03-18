/* eslint-disable import/no-extraneous-dependencies */
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/system';
import { Paper, Button } from '@mui/material';

const theme = createTheme();

export const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
  },
});

export const StyledPaper = styled(Paper)({
  padding: theme.spacing(2),
});

export const StyledButton = styled(Button)({
  marginBottom: 10,
});

export const StyledDiv = styled('div')({
  width: '97%',
  margin: '10px 0',
});
