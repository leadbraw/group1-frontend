'use client';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import BookIcon from '@mui/icons-material/Book';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { List, Divider } from '@mui/material';
import books from 'core/mock/mock-data';
import { BookListItem, NoBook } from 'components/BookListItem';

const defaultTheme = createTheme();

export default function BooksList() {
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
          <Typography component="h1" variant="h5">
            Book List
          </Typography>

          <Box sx={{ mt: 4, width: '100%' }}>
            <List>
              {books.length > 0 ? (
                books.map((book, index: number) => (
                  <React.Fragment key={book.isbn13}>
                    <BookListItem
                      book={book}
                      onDelete={function (isbn13: number): void {
                        throw new Error('Function not implemented.');
                      }}
                    />
                    {index < books.length - 1 && <Divider component="li" />}
                  </React.Fragment>
                ))
              ) : (
                <NoBook />
              )}
            </List>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
