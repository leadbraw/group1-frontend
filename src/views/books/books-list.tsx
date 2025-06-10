'use client';

import * as React from 'react';
import {
  Avatar,
  CssBaseline,
  Box,
  Typography,
  Container,
  List,
  Divider,
  Button,
  Stack,
  CircularProgress
} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'utils/axios';
import { BookListItem, NoBook } from 'components/BookListItem';
import { IBook } from 'types/books';

const defaultTheme = createTheme();

export default function BooksList() {
  const [books, setBooks] = React.useState<IBook[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [limit] = React.useState(20); 
  const [pages, setPages] = React.useState(1); 

  const fetchBooks = async (pageNumber: number) => {
    setLoading(true);
    try {
      const response = await axios.get('/books', {
        params: {
          page: pageNumber,
          limit: limit
        }
      });

      setBooks(response.data.books);
      setPages(response.data.pages);
      setPage(response.data.page);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchBooks(page);
  }, []);

  const handlePrev = () => {
    if (page > 1) {
      fetchBooks(page - 1);
    }
  };

  const handleNext = () => {
    if (page < pages) {
      fetchBooks(page + 1);
    }
  };

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
            {loading ? (
              <Box display="flex" justifyContent="center" alignItems="center" p={2}>
                <CircularProgress />
              </Box>
            ) : (
              <List>
                {books.length > 0 ? (
                  books.map((book, index) => (
                    <React.Fragment key={book.isbn13}>
                      <BookListItem
                        book={book}
                        onDelete={() => {}}
                      />
                      {index < books.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                  ))
                ) : (
                  <NoBook />
                )}
              </List>
            )}
          </Box>

          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button variant="contained" onClick={handlePrev} disabled={page === 1 || loading}>
              Previous
            </Button>
            <Typography variant="body1" sx={{ alignSelf: 'center' }}>
              Page {page} of {pages}
            </Typography>
            <Button variant="contained" onClick={handleNext} disabled={page === pages || loading}>
              Next
            </Button>
          </Stack>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
