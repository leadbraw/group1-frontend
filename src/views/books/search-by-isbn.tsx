'use client';

import React, { useState } from 'react';

// material-ui
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

const IsbnSearch = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [error, setError] = useState('');

  return (
    <Formik
      initialValues={{ isbn: '' }}
      validationSchema={Yup.object({
        isbn: Yup.string().required('ISBN is required').length(13, 'ISBN must be 13 digits long').matches(/^\d+$/, 'ISBN must be numeric')
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setError('');
        setBooks([]);
        try {
          const res = await axios.get(`/books/isbn/${encodeURIComponent(values.isbn)}`);
          setBooks(res.data);
          console.log('The books:', res.data); // DEBUG LINE
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
            <Typography variant="h6">ISBN</Typography>
            <TextField
              name="isbn"
              fullWidth
              value={values.isbn}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.isbn && Boolean(errors.isbn)}
              helperText={touched.isbn && errors.isbn}
              placeholder="Enter ISBN number"
            />
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Search
            </Button>

            {error && <Typography color="error">{error}</Typography>}

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
                  <Typography component="h1" variant="h5">
                    Results
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
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default IsbnSearch;
