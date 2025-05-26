// components/BookDetails.tsx
'use client';
import { IBook } from 'types/books';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export default function BookDetails({ book }: { book: IBook }) {
  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {book.original_title}
      </Typography>

      <Box sx={{ my: 2 }}>
        <Image
          src={book.image_url}
          alt={book.title}
          width={200}
          height={300}
          style={{ borderRadius: 4 }}
        />
      </Box>

      <Typography variant="body1" gutterBottom>
        ISBN-13: {book.isbn13}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Publication Year: {book.original_publication_year}
      </Typography>
    </Box>
  );
}