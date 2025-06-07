// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project import
import AuthWrapper from 'sections/auth/AuthWrapper';
import NewBookForm from 'sections/books/NewBookForm';

// ================================|| NEW BOOK PAGE ||================================ //

export default function NewBook() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack sx={{ mb: { xs: -0.5, sm: 0.5 } }} spacing={1}>
          <Typography variant="h3">Create a New Book</Typography>
          <Typography color="secondary">Fill out the form below to add a new book</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <NewBookForm />
      </Grid>
    </Grid>
  );
}
