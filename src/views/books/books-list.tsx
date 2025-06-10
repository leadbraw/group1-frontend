'use client';
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import BookIcon from '@mui/icons-material/Book';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { List, Divider, Button } from '@mui/material';
import { BookListItem, NoBook } from 'components/BookListItem';
import { IBook } from 'types/books';
import axios from 'utils/axios'; 

const defaultTheme = createTheme();
const limit = 20; 

export default function BooksList() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`/books?page=${page}&limit=${limit}`);
        setBooks(res.data.books || []);
        setHasMore(res.data.books.length === limit);
      } catch (err) {
        console.error('Failed to fetch books:', err);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [page]);

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
              <Typography>Loading...</Typography>
            ) : (
              <List>
                {books.length > 0 ? (
                  books.map((book, index: number) => (
                    <React.Fragment key={book.isbn13}>
                      <BookListItem book={book} />
                      {index < books.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                  ))
                ) : (
                  <NoBook />
                )}
              </List>
            )}

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button
                variant="outlined"
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1 || loading}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                onClick={() => setPage((prev) => prev + 1)}
                disabled={!hasMore || loading}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
