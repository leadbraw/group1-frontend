'use client';

import { IBook } from 'types/books';
import Image from 'next/image';
import { Box, Typography, Container } from '@mui/material';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';

type BookItemProps = {
  book: IBook;
};

export function BookItem({ book }: BookItemProps) {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Image src={book.icons.small} alt={book.title} width={200} height={300} style={{ borderRadius: 8 }} />
        <Typography variant="h4" align="center">
          {book.title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center">
          Original Title: {book.original_title}
        </Typography>
        <Typography variant="body1" align="center">
          ISBN-13: {book.isbn13}
        </Typography>
        <Typography variant="body2" align="center">
          Published: {book.publication}
        </Typography>
      </Box>
    </Container>
  );
}
export function NoBook() {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <CommentsDisabledIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="No Book Selected" secondary="Please choose a book from the list." />
    </ListItem>
  );
}
