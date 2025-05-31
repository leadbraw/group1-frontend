'use client';

import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function NewBook() {
  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New book:', { title, isbn });
    // Connect this to an API later???
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <TextField label="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <TextField label="ISBN-13" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
      <Button type="submit" variant="contained">
        Add Book
      </Button>
    </Box>
  );
}
