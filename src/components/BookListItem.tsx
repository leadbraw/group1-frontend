'use client';
import { useRouter } from 'next/navigation';
import { IBook } from 'types/books';
import CommentsDisabledIcon from '@mui/icons-material/CommentsDisabled';
import { ListItem, ListItemAvatar, ListItemText, Avatar, ListItemButton } from '@mui/material';
import { useBook } from 'contexts/BookContext';

export function BookListItem({ book }: { book: IBook }) {
  const router = useRouter();
  const { onChangeBook } = useBook();

  function handleClick(book: IBook) {
    onChangeBook(book);
    router.push('/books/BookContext');
  }
  return (
    <ListItem alignItems="flex-start" disablePadding>
      <ListItemButton onClick={() => handleClick(book)}>
        <ListItemAvatar>
          <Avatar alt={book.title} src={book.icons.small || book.icons.large} variant="rounded" />
        </ListItemAvatar>
        <ListItemText primary={book.title} secondary={'ISBN-13 Number: ' + book.isbn13} secondaryTypographyProps={{ color: 'gray' }} />
      </ListItemButton>
    </ListItem>
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
      <ListItemText primary="No Elements" />
    </ListItem>
  );
}
