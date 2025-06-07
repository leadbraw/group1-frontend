// material-ui
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AuthCard from 'sections/auth/AuthCard';

// project import
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
        <Box sx={{ minHeight: '100vh' }}>
          <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
            <Grid item xs={12}>
              <Grid
                item
                xs={12}
                container
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
              >
                <Grid item>
                  <AuthCard>
                    <NewBookForm />
                  </AuthCard>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
