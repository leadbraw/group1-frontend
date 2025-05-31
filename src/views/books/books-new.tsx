'use client';

import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function NewBook() {
  const [isbn, setIsbn] = useState('');
  const [author, setAuthor] = useState('');
  const [publicationYear, setPublicationYear] = useState('');
  const [title, setTitle] = useState('');
  const [url, setURL] = useState('');
  const [smallUrl, setSmallURL] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('New book:', { title, isbn });
    // Connect this to an API later???
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
      <TextField label="ISBN-13" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
      <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />{' '}
      <TextField label="Publication Year" value={publicationYear} onChange={(e) => setPublicationYear(e.target.value)} required />
      <TextField label="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />{' '}
      <TextField label="Image URL" value={url} onChange={(e) => setURL(e.target.value)} required />
      <TextField label="Small Image URL" value={smallUrl} onChange={(e) => setSmallURL(e.target.value)} required />
      <Button type="submit" variant="contained">
        Add Book
      </Button>
    </Box>
  );
}
