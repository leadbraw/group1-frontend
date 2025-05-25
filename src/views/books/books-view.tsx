'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import BookIcon from '@mui/icons-material/Book';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { Divider, List } from '@mui/material';
//import axios from 'utils/axios';
//import { IBook } from 'types/books';

const defaultTheme = createTheme();

export default function BookView() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <BookIcon />
          </Avatar>
          <Typography component="h1" variant="h5"></Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
