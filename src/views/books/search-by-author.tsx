'use client';

import React, { useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
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
import { BookListItem } from 'components/BookListItem';

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
              <List>
                {books.map((book) => (
                  <BookListItem key={book.isbn13} book={book} />
                ))}
              </List>
            )}
          </Stack>
        </form>
      )}
    </Formik>
  );
};

export default AuthorSearch;
