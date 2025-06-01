'use client';

import { SnackbarProps } from 'types/snackbar';
//import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';

import { Formik } from 'formik';
import * as Yup from 'yup';

import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'api/snackbar';

export default function NewBookForm() {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
        isbn: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required('Title is required'),
        author: Yup.string().required('Author is required'),
        isbn: Yup.string().required('ISBN is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // Replace this with API call
          console.log('Submitting book:', values);

          openSnackbar({
            open: true,
            message: 'Book created successfully!',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: true, // allow snackbar to be closable
            anchorOrigin: { vertical: 'top', horizontal: 'right' }, // default position
            transition: 'Fade', // assuming your snackbar supports transitions like 'Fade', 'SlideLeft', etc.
            action: false // no custom action button
          } as SnackbarProps);

          setStatus({ success: true });
          setSubmitting(false);
          router.push('/books');
        } catch (err: any) {
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="book-title">Title</InputLabel>
                <OutlinedInput
                  id="book-title"
                  fullWidth
                  name="title"
                  value={values.title}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.title && errors.title)}
                  placeholder="Enter book title"
                />
                {touched.title && errors.title && <FormHelperText error>{errors.title}</FormHelperText>}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="book-author">Author</InputLabel>
                <OutlinedInput
                  id="book-author"
                  fullWidth
                  name="author"
                  value={values.author}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.author && errors.author)}
                  placeholder="Enter author name"
                />
                {touched.author && errors.author && <FormHelperText error>{errors.author}</FormHelperText>}
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="book-isbn">ISBN</InputLabel>
                <OutlinedInput
                  id="book-isbn"
                  fullWidth
                  name="isbn"
                  value={values.isbn}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.isbn && errors.isbn)}
                  placeholder="Enter ISBN number"
                />
                {touched.isbn && errors.isbn && <FormHelperText error>{errors.isbn}</FormHelperText>}
              </Stack>
            </Grid>

            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}

            <Grid item xs={12}>
              <AnimateButton>
                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  Create Book
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
