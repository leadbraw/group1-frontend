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

const YearSearch = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [error, setError] = useState('');

  return (
    <Formik
      initialValues={{ year: '' }}
      validationSchema={Yup.object({
        year: Yup.number()
          .required('Publication year is required')
          .min(868, 'The oldest book is in 868 CE...')
          .max(new Date().getFullYear(), 'Are you time travelling?')
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setError('');
        setBooks([]);
        try {
          const res = await axios.get(`/books/year/${encodeURIComponent(values.year)}`);
          setBooks(res.data.books);
          console.log('The books:', res.data); // DEBUG LINE
        } catch (err: any) {
          setError(err.message || 'Failed to fetch books.');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <>
          <form onSubmit={handleSubmit} noValidate>
            <Stack spacing={2}>
              <Typography variant="h6">Year</Typography>
              <TextField
                name="year"
                fullWidth
                value={values.year}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.year && Boolean(errors.year)}
                helperText={touched.year && errors.year}
                placeholder="Enter year of publication"
              />
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Search
              </Button>

              {error && <Typography color="error">{error}</Typography>}
            </Stack>
          </form>
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="md">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography component="h1" variant="h5">
                  Results
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <List sx={{ width: '100%', maxWidth: 800 }}>
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
        </>
      )}
    </Formik>
  );
};

export default YearSearch;
