'use client';

import React, { useState } from 'react';

// material-ui
import Avatar from '@mui/material/Avatar';
import BookIcon from '@mui/icons-material/Book';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project import
import axios from 'utils/axios';
import { IBook } from 'types/books';
import { BookListItem, NoBook } from 'components/BookListItem';

const defaultTheme = createTheme();

const AuthorSearch = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [error, setError] = useState('');

  return (
    <Formik
      initialValues={{ author: '' }}
      validationSchema={Yup.object({
        author: Yup.string().required('Author name is required')
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setError('');
        setBooks([]);
        try {
          const res = await axios.get(`/books/author/${encodeURIComponent(values.author)}`);
          setBooks(res.data.books);
          console.log('The books:', res.data.books); // DEBUG LINE
        } catch (err: any) {
          setError(err.message || 'Failed to fetch books.');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Stack spacing={2}>
            <Typography variant="h6">Author</Typography>
            <TextField
              name="author"
              fullWidth
              value={values.author}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.author && Boolean(errors.author)}
              helperText={touched.author && errors.author}
              placeholder="Enter name"
            />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Search
            </Button>

            {error && <Typography color="error">{error}</Typography>}

            {books.length > 0 && (
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
                              <BookListItem book={book} />
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
            )}
          </Stack>
        </form>
      )}
    </Formik>
  );
};

// <List>
//   {books.map((book) => (
//     <BookListItem key={book.isbn13} book={book} />
//   ))}
// </List>

export default AuthorSearch;
