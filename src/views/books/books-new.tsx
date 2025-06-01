'use client';

import { Formik } from 'formik';
import * as Yup from 'yup';

// material-ui
import {
  //Box,
  Button,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  FormHelperText
} from '@mui/material';

// project components
import AnimateButton from 'components/@extended/AnimateButton';
import { openSnackbar } from 'api/snackbar';

// types
import { SnackbarProps } from 'types/snackbar';

export default function NewBook() {
  return (
    <Formik
      initialValues={{
        title: '',
        isbn: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().max(255).required('Title is required'),
        isbn: Yup.string()
          .matches(/^\d{13}$/, 'ISBN must be a 13-digit number')
          .required('ISBN is required')
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          // You could send `values` to an API here

          setStatus({ success: true });
          setSubmitting(false);

          openSnackbar({
            open: true,
            message: 'New book added successfully!',
            variant: 'alert',
            alert: { color: 'success' }
          } as SnackbarProps);
        } catch (err: any) {
          console.error(err);
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
                <InputLabel htmlFor="book-title">Book Title</InputLabel>
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
                <InputLabel htmlFor="book-isbn">ISBN-13</InputLabel>
                <OutlinedInput
                  id="book-isbn"
                  fullWidth
                  name="isbn"
                  value={values.isbn}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.isbn && errors.isbn)}
                  placeholder="Enter 13-digit ISBN"
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
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  Add Book
                </Button>
              </AnimateButton>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
