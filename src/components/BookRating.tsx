'use client';

import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'utils/axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const UpdateRatingBook = ({ bookId }: { bookId: number }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  return (
    <Formik
      initialValues={{ rating: '' }}
      validationSchema={Yup.object({
        rating: Yup.number().min(1, 'Minimum rating is 1').max(5, 'Maximum rating is 5').required('Rating is required')
      })}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setError('');
        setSuccess('');
        try {
          await axios.patch(`/books/rating`, {
            book_id: bookId,
            rating: values.rating
          });
          setSuccess('Rating updated successfully!');
          resetForm();
        } catch (err: any) {
          setError(err.message || 'Failed to update rating');
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting }) => (
        <Form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Update Rating
          </Typography>

          <TextField
            fullWidth
            name="rating"
            label="Enter rating (1–5)"
            type="number"
            value={values.rating}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.rating && Boolean(errors.rating)}
            helperText={touched.rating && errors.rating}
            margin="normal"
            inputProps={{ min: 1, max: 5 }}
          />

          <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
            Update
          </Button>

          {error && (
            <Typography color="error" mt={2}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="primary" mt={2}>
              {success}
            </Typography>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default UpdateRatingBook;
