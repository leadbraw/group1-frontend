'use client';

import { SnackbarProps } from 'types/snackbar';
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
        publicationYear: '',
        imageUrl: '',
        smallImageUrl: '',
        submit: null
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required('Title is required'),
        author: Yup.string().required('Author is required'),
        isbn: Yup.string().required('ISBN is required'),
        publicationYear: Yup.number()
          .typeError('Publication year must be a number')
          .integer('Must be an integer')
          .min(0, 'Year cannot be negative')
          .nullable(),
        imageUrl: Yup.string().url('Must be a valid URL').nullable(),
        smallImageUrl: Yup.string().url('Must be a valid URL').nullable()
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          console.log('Submitting book:', values);

          openSnackbar({
            open: true,
            message: 'Book created successfully!',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: true,
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            transition: 'Fade',
            action: false
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
            {/* Title */}
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

            {/* Author */}
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

            {/* ISBN */}
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

            {/* Publication Year */}
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="book-publication-year">Publication Year</InputLabel>
                <OutlinedInput
                  id="book-publication-year"
                  fullWidth
                  name="publicationYear"
                  value={values.publicationYear}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.publicationYear && errors.publicationYear)}
                  placeholder="Enter publication year"
                />
                {touched.publicationYear && errors.publicationYear && <FormHelperText error>{errors.publicationYear}</FormHelperText>}
              </Stack>
            </Grid>

            {/* Image URL */}
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="book-image-url">Image URL</InputLabel>
                <OutlinedInput
                  id="book-image-url"
                  fullWidth
                  name="imageUrl"
                  value={values.imageUrl}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.imageUrl && errors.imageUrl)}
                  placeholder="Enter image URL"
                />
                {touched.imageUrl && errors.imageUrl && <FormHelperText error>{errors.imageUrl}</FormHelperText>}
              </Stack>
            </Grid>

            {/* Small Image URL */}
            <Grid item xs={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="book-small-image-url">Small Image URL</InputLabel>
                <OutlinedInput
                  id="book-small-image-url"
                  fullWidth
                  name="smallImageUrl"
                  value={values.smallImageUrl}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  error={Boolean(touched.smallImageUrl && errors.smallImageUrl)}
                  placeholder="Enter small image URL"
                />
                {touched.smallImageUrl && errors.smallImageUrl && <FormHelperText error>{errors.smallImageUrl}</FormHelperText>}
              </Stack>
            </Grid>

            {/* Submission Errors */}
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}

            {/* Submit Button */}
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
