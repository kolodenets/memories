import React, { useState } from 'react';
import {
  Container, AppBar, Typography, Grow, Grid,
} from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { appBar, heading } from './styles';

function App() {
  const [currentId, setCurrentId] = useState(0);

  return (

    <Container maxWidth="lg">
      <StyledEngineProvider injectFirst>
        <AppBar sx={appBar} position="static" color="inherit">
          <Typography sx={heading} variant="h2" align="center">
            Memories
          </Typography>
          <img style={{ marginLeft: '15px' }} src={memories} alt="icon" height="60" />
        </AppBar>
      </StyledEngineProvider>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
